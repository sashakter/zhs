import { NextRequest, NextResponse } from 'next/server'
import { fetchBrands, fetchProducts } from '@/src/lib/cms'

export async function GET(request: NextRequest) {
  try {
    const type = new URL(request.url).searchParams.get('type') || 'brands'

    if (type === 'brands') {
      const data = await fetchBrands({ limit: 10, status: 'ACTIVE' })
      return NextResponse.json({
        count: data.items.length,
        items: data.items.map((b) => ({
          id: b.id,
          name: b.name,
          slug: b.slug,
          hasCover: !!b.cover?.url,
          sortOrder: b.sortOrder,
          sortOrderType: typeof b.sortOrder,
        })),
      })
    } else {
      const data = await fetchProducts({ limit: 10, status: 'ACTIVE' })
      return NextResponse.json({
        count: data.items.length,
        items: data.items.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          sortOrder: p.sortOrder,
          sortOrderType: typeof p.sortOrder,
        })),
      })
    }
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}
