# Диагностика и решение проблемы кэширования брендов/продуктов

## Проблема
Изменение порядка брендов и продуктов в CMS обновлялось в БД, но на сайте не отображалось мгновенно, в то время как обновление порядка секций работало корректно.

## Анализ причины
Была обнаружена разница в конфигурации кэша:

### Для секций (работает):
```typescript
// src/lib/sections.ts
const res = await fetch(url.toString(), {
  next: { tags: ['sections'], revalidate: false },
  cache: 'no-store',
})
```

### Для брендов/продуктов (не работало):
```typescript
// src/lib/cms.ts (было)
const res = await fetch(url.toString(), {
  next: {
    tags: [...],
    revalidate: false,
  },
  // cache: 'no-store' было отсутствует!
})
```

## Решение

### 1. Добавлен `cache: 'no-store'` в cms.ts
```typescript
const res = await fetch(url.toString(), {
  headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : undefined,
  cache: 'no-store', // ← Добавлено
  next: {
    tags: nextOpts?.tags || [],
  },
})
```

### 2. Добавлены теги для инвалидации
Обновлены функции в cms.ts:
- `fetchBrands()` - добавлен тег `'sort-order'`
- `fetchBrandBySlug()` - добавлен тег `'sort-order'`
- `fetchProducts()` - добавлен тег `'sort-order'`

### 3. Обновлена конфигурация на страницах
- `[locale]/page.tsx` - добавлен `export const revalidate = false`
- `[locale]/brands/[slug]/page.tsx` - изменено с 600 на 300 (5 минут)
- `[locale]/products/[slug]/page.tsx` - изменено с 600 на 300 (5 минут)

### 4. Расширена инвалидация в /api/revalidate
При получении тега `'sort-order'` теперь инвалидируются:
- Главная страница `/` (где расположена карусель брендов)
- Все пути с брендами: `/brands`, `/uk/brands`, `/en/brands`
- Все пути с продуктами: `/products`, `/uk/products`, `/en/products`
- Динамические пути: `/brands/[slug]`, `/products/[slug]`
- Теги для языков

### 5. Создан отладочный endpoint
`/api/revalidate-debug` для диагностики проблем с кэшем

## Как это работает теперь

1. **CMS отправляет webhook** → `/api/revalidate` с `tags: ['sort-order', 'brands']`

2. **Endpoint инвалидирует теги** → `revalidateTag('sort-order')`, `revalidateTag('brands')`

3. **Endpoint инвалидирует пути** → `revalidatePath('/')`, `revalidatePath('/brands')` и т.д.

4. **Next.js очищает кэш** → Все данные об брендах/продуктах обновляются

5. **На странице** → Карусель и компоненты отображают новый порядок

## Тестирование

Используйте скрипт для проверки:
```bash
node test-revalidate.js sort-order brands
```

Или для отладки:
```bash
node test-revalidate.js sort-order brands --debug
```

## Ключевые отличия
| Параметр | Секции | Бренды/Продукты |
|----------|--------|-----------------|
| `cache` | `'no-store'` | `'no-store'` ✅ |
| `revalidate` | `false` | ~~false~~ удалено ✅ |
| `tags` | `['sections']` | `['...', 'sort-order']` ✅ |
| На сервере | Fetch напрямую | Fetch через cms.ts ✅ |

## Файлы которые были изменены
- ✅ `src/lib/cms.ts` - добавлен `cache: 'no-store'` и теги
- ✅ `src/app/api/revalidate/route.ts` - расширена инвалидация путей
- ✅ `src/app/[locale]/page.tsx` - добавлен `revalidate = false`
- ✅ `src/app/[locale]/brands/[slug]/page.tsx` - изменено `revalidate = 300`
- ✅ `src/app/[locale]/products/[slug]/page.tsx` - изменено `revalidate = 300`
- ✅ `src/app/api/revalidate-debug/route.ts` - создан новый отладочный endpoint
- ✅ `test-revalidate.js` - обновлен тестовый скрипт
