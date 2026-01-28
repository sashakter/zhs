import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      console.warn('[Revalidate] Unauthorized: Invalid secret')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { tags, tag } = await request.json()
    const tagsToRevalidate = tags || (tag ? [tag] : ['articles', 'products', 'brands', 'sections'])

    if (!Array.isArray(tagsToRevalidate)) {
      return NextResponse.json(
        { error: 'tags must be an array' },
        { status: 400 }
      )
    }

    console.log(`[Revalidate] Starting revalidation for tags:`, tagsToRevalidate)

    // Очищаем кэш для каждого тега
    tagsToRevalidate.forEach((t: string) => {
      revalidateTag(t)
      console.log(`[Revalidate] Tag cleared: ${t}`)
    })

    // Также очищаем кэш для страниц которые используют эти теги
    // Это необходимо для немедленного обновления в production
    const pathsToRevalidate: string[] = []

    if (tagsToRevalidate.includes('articles')) {
      pathsToRevalidate.push('/uk/news', '/en/news', '/news')
      revalidatePath('/uk/news')
      revalidatePath('/en/news')
      revalidatePath('/news')
    }

    if (tagsToRevalidate.includes('products')) {
      pathsToRevalidate.push('/uk/products', '/en/products', '/products')
      revalidatePath('/uk/products')
      revalidatePath('/en/products')
      revalidatePath('/products')
    }

    if (tagsToRevalidate.includes('brands')) {
      console.log('[Revalidate] Processing brands tag...')
      pathsToRevalidate.push('/uk/brands', '/en/brands', '/brands')
      revalidatePath('/uk/brands')
      revalidatePath('/en/brands')
      revalidatePath('/brands')
      
      // Также инвалидируем главную страницу где есть карусель брендов
      console.log('[Revalidate] Revalidating main page for brands carousel...')
      revalidatePath('/')
      revalidatePath('/uk', 'layout')
      revalidatePath('/en', 'layout')
    }

    if (tagsToRevalidate.includes('sections')) {
      pathsToRevalidate.push('/uk', '/en', '/')
      revalidatePath('/uk', 'layout')
      revalidatePath('/en', 'layout')
      revalidatePath('/', 'layout')
    }

    // Инвалидируем пути при изменении порядка брендов/продуктов
    if (tagsToRevalidate.includes('sort-order')) {
      console.log('[Revalidate] Clearing sort-order cache')
      
      // Главная страница (самое важное - где карусель брендов)
      console.log('[Revalidate] Revalidating main page...')
      revalidatePath('/')
      revalidatePath('/uk', 'layout')
      revalidatePath('/en', 'layout')
      
      // Все пути с брендами
      console.log('[Revalidate] Revalidating brands...')
      pathsToRevalidate.push('/uk/brands', '/en/brands', '/brands')
      revalidatePath('/uk/brands')
      revalidatePath('/en/brands')
      revalidatePath('/brands')
      
      // Динамические пути брендов
      revalidatePath('/uk/brands/[slug]', 'page')
      revalidatePath('/en/brands/[slug]', 'page')
      
      // Все пути с продуктами
      console.log('[Revalidate] Revalidating products...')
      pathsToRevalidate.push('/uk/products', '/en/products', '/products')
      revalidatePath('/uk/products')
      revalidatePath('/en/products')
      revalidatePath('/products')
      
      // Динамические пути продуктов
      revalidatePath('/uk/products/[slug]', 'page')
      revalidatePath('/en/products/[slug]', 'page')
    }

    return NextResponse.json({
      revalidated: true,
      tags: tagsToRevalidate,
      paths: pathsToRevalidate,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    )
  }
}
