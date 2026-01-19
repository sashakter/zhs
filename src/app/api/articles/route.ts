import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { fetchArticles } from '@/src/lib/cms'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, Number(searchParams.get('page') || 1))
    const pageSize = Math.min(24, Math.max(6, Number(searchParams.get('pageSize') || 12)))
    const locale = searchParams.get('locale') || 'uk'

    const data = await fetchArticles({
      page,
      pageSize,
      status: 'ACTIVE',
      locale,
      sort: 'date_desc',
    })

    return NextResponse.json(
      {
        items: data.items,
        total: data.total,
        page,
        pageSize,
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=0, stale-while-revalidate=3600',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Проверка авторизации
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Очищаем кэш для статей на всех локалях
    revalidateTag('articles')
    revalidateTag('articles:uk')
    revalidateTag('articles:en')

    return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() })
  } catch (error) {
    console.error('Error updating articles:', error)
    return NextResponse.json({ error: 'Failed to update articles' }, { status: 500 })
  }
}
