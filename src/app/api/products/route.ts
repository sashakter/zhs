import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'
import { fetchProducts } from '@/src/lib/cms'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, Number(searchParams.get('page') || 1))
    const limit = Math.min(48, Math.max(12, Number(searchParams.get('limit') || 24)))
    const q = searchParams.get('q') || undefined
    const locale = searchParams.get('locale') || 'uk'

    const data = await fetchProducts({ q, page, limit, status: 'ACTIVE', locale })

    return NextResponse.json(
      {
        items: data.items,
        total: data.total,
        page,
        limit,
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      console.warn('[Products API] Unauthorized PUT request')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('[Products API] Revalidating products cache')

    revalidateTag('products')
    revalidateTag('products:uk')
    revalidateTag('products:en')

    revalidatePath('/uk/products')
    revalidatePath('/en/products')
    revalidatePath('/products')

    console.log('[Products API] ✓ Revalidation complete')

    return NextResponse.json({
      revalidated: true,
      message: 'Products cache cleared successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('[Products API] Error during revalidation:', error)
    return NextResponse.json({ error: 'Failed to update products' }, { status: 500 })
  }
}
