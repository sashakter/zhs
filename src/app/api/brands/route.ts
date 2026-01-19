import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { fetchBrands } from '@/src/lib/cms'

export async function GET(request: NextRequest) {
  try {
    const locale = new URL(request.url).searchParams.get('locale') || 'uk'
    const data = await fetchBrands({ limit: 120, status: 'ACTIVE', locale })

    return NextResponse.json(data.items || [], {
      headers: {
        'Cache-Control': 'public, max-age=0, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    console.error('Error fetching brands:', error)
    return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Очищаем кэш для брендов на всех локалях
    revalidateTag('brands')
    revalidateTag('brands:uk')
    revalidateTag('brands:en')

    return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() })
  } catch (error) {
    console.error('Error updating brands:', error)
    return NextResponse.json({ error: 'Failed to update brands' }, { status: 500 })
  }
}
