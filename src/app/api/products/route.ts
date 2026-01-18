import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { fetchProducts } from '@/src/lib/cms'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, Number(searchParams.get('page') || 1))
    const limit = Math.min(48, Math.max(12, Number(searchParams.get('limit') || 24)))
    const q = searchParams.get('q') || undefined

    const data = await fetchProducts({ q, page, limit, status: 'ACTIVE' })

    return NextResponse.json({
      items: data.items,
      total: data.total,
      page,
      limit,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Проверка авторизации (если нужна)
    const secret = request.headers.get('x-api-secret')
    if (secret !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // После обновления продуктов в БД
    revalidateTag('products')

    return NextResponse.json({ revalidated: true })
  } catch (error) {
    console.error('Error updating products:', error)
    return NextResponse.json({ error: 'Failed to update products' }, { status: 500 })
  }
}
