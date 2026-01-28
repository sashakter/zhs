import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Debug endpoint для проверки инвалидации кэша
 * Используется для тестирования и отладки
 */

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    const apiSecret = process.env.API_SECRET

    console.log('='.repeat(50))
    console.log('[Revalidate-Debug] Endpoint called')
    console.log('Time:', new Date().toISOString())
    console.log('Headers:', Object.fromEntries(request.headers))
    
    // Log request body
    let body: any
    try {
      const text = await request.text()
      body = JSON.parse(text)
      console.log('Body:', body)
    } catch (e) {
      console.log('Failed to parse body:', e)
    }

    if (!secret || !apiSecret || secret !== apiSecret) {
      console.log('Unauthorized: secret mismatch')
      console.log('Provided:', secret)
      console.log('Expected:', apiSecret)
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { tags } = body

    if (!tags || !Array.isArray(tags)) {
      console.log('Invalid tags:', tags)
      return NextResponse.json(
        { error: 'Tags array is required' },
        { status: 400 }
      )
    }

    console.log('Revalidating tags:', tags)

    // Revalidate все указанные теги
    tags.forEach((tag: string) => {
      console.log(`[Revalidate-Debug] Clearing tag: ${tag}`)
      revalidateTag(tag)
    })

    // Также инвалидируем пути
    const pathsToRevalidate: string[] = []

    if (tags.includes('brands') || tags.includes('sort-order')) {
      console.log('[Revalidate-Debug] Revalidating brand paths...')
      pathsToRevalidate.push('/', '/uk', '/en')
      revalidatePath('/')
      revalidatePath('/uk')
      revalidatePath('/en')
    }

    console.log('[Revalidate-Debug] Revalidated paths:', pathsToRevalidate)
    console.log('[Revalidate-Debug] Success!')
    console.log('='.repeat(50))

    return NextResponse.json({
      success: true,
      message: `Revalidated ${tags.length} tag(s)`,
      tags,
      paths: pathsToRevalidate,
      timestamp: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Debug revalidate endpoint',
    usage: 'POST /api/revalidate-debug with x-api-secret header',
  })
}
