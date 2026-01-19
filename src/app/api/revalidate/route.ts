import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Универсальный endpoint для revalidation
 * Используется для очистки кэша при обновлении данных в CMS
 * 
 * Пример использования в CMS:
 * await fetch('/api/revalidate', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json',
 *     'x-api-secret': process.env.API_SECRET,
 *   },
 *   body: JSON.stringify({
 *     tags: ['articles', 'products', 'brands', 'sections']
 *   })
 * })
 */

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
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

    // Очищаем кэш для каждого тега
    tagsToRevalidate.forEach((t: string) => {
      revalidateTag(t)
      console.log(`[Revalidate] Tag cleared: ${t}`)
    })

    return NextResponse.json({
      revalidated: true,
      tags: tagsToRevalidate,
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
