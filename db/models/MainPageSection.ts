/**
 * Модель MainPageSection больше не используется.
 * Данные о секциях и их порядке фетчатся из CMS.
 * Смотри src/lib/sections.ts и src/app/api/sections/route.ts
 */

// Для совместимости можно оставить импорт типа если где-то используется
export interface Section {
  id: string
  key: string
  position: number
  isVisible: boolean
}
