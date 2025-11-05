import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

type WebhookBody = {
  secret: string
  type: 'brand' | 'product' | 'brands' | 'products'
  slug?: string
  brandSlug?: string
  productSlugs?: string[]
}

const CMS_BASE = process.env.CMS_PUBLIC_BASE_URL
const CMS_TOKEN = process.env.CMS_READONLY_TOKEN

export async function POST(req: NextRequest) {
  let body: WebhookBody | null = null
  try {
    body = (await req.json()) as WebhookBody
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const secret = process.env.REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'Missing REVALIDATE_SECRET' },
      { status: 500 },
    )
  }
  if (!body || body.secret !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const tagsRevalidated: string[] = []

  async function revalidate(tag: string) {
    revalidateTag(tag)
    tagsRevalidated.push(tag)
  }

  if (body.type === 'products') {
    await revalidate('products')
  } else if (body.type === 'brands') {
    await revalidate('brands')
  } else if (body.type === 'product') {
    if (!body.slug) {
      return NextResponse.json({ ok: false, error: 'Missing product slug' }, { status: 400 })
    }
    await revalidate('products')
    await revalidate(`product:${body.slug}`)
    if (body.brandSlug) {
      await revalidate(`products:brand:${body.brandSlug}`)
      await revalidate(`brand:${body.brandSlug}`)
    }
  } else if (body.type === 'brand') {
    if (!body.slug) {
      return NextResponse.json({ ok: false, error: 'Missing brand slug' }, { status: 400 })
    }
    await revalidate('brands')
    await revalidate(`brand:${body.slug}`)
    await revalidate(`products:brand:${body.slug}`)

    let productSlugs: string[] | undefined = body.productSlugs
    if (!productSlugs && CMS_BASE) {
      try {
        const url = new URL('/api/products', CMS_BASE)
        url.searchParams.set('brand', body.slug)
        url.searchParams.set('limit', '1000')
        const res = await fetch(url.toString(), {
          headers: CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : undefined,
          cache: 'no-store',
        })
        if (res.ok) {
          const data = (await res.json()) as { items: { slug: string }[] }
          productSlugs = data.items?.map((i) => i.slug)
        }
      } catch {
      }
    }
    if (productSlugs?.length) {
      await Promise.all(productSlugs.map((s) => revalidate(`product:${s}`)))
    }
  } else {
    return NextResponse.json({ ok: false, error: 'Unknown type' }, { status: 400 })
  }

  return NextResponse.json({ ok: true, revalidated: tagsRevalidated })
}
