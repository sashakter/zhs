const BASE = process.env.CMS_PUBLIC_BASE_URL!
const TOKEN = process.env.CMS_READONLY_TOKEN
export const revalidateSeconds = 600

type NextOpts = {
  tags?: string[]
}

async function getJSON<T>(
  path: string,
  search?: Record<string, string | number | undefined>,
  nextOpts?: NextOpts,
) {
  const url = new URL(path, BASE)
  if (search)
    for (const [k, v] of Object.entries(search))
      if (v != null) url.searchParams.set(k, String(v))
  const res = await fetch(url.toString(), {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : undefined,
    next: { revalidate: revalidateSeconds, tags: nextOpts?.tags },
  })
  if (!res.ok) throw new Error(`CMS ${res.status} for ${url}`)
  return (await res.json()) as T
}

export type Media = {
  url: string
  width?: number | null
  height?: number | null
  alt?: string | null
}

export type BrandLite = {
  id: string
  name: string
  slug: string
  description?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  cover?: Media | null
  _count?: { products: number }
}

export type ProductVariantLite = {
  id: string
  label?: string | null
  volumeMl?: number | null
  position: number
}
export type ProductLite = {
  id: string
  name: string
  slug: string
  cover?: Media | null
  brand?: { id: string; name: string; slug: string } | null
  variants?: ProductVariantLite[]
}

export type BrandsList = {
  items: BrandLite[]
  page: number
  limit: number
  total: number
}
export type ProductsList = {
  items: ProductLite[]
  page: number
  limit: number
  total: number
}

export async function fetchBrands(params?: {
  q?: string
  page?: number
  limit?: number
  status?: 'ACTIVE'
}) {
  return getJSON<BrandsList>(
    '/api/brands',
    {
      status: params?.status ?? 'ACTIVE',
      q: params?.q,
      page: params?.page,
      limit: params?.limit,
    },
    { tags: ['brands'] },
  )
}
export async function fetchBrandBySlug(slug: string) {
  return getJSON<BrandLite & { products: ProductLite[] }>(
    `/api/brands/${slug}`,
    undefined,
    { tags: ['brands', `brand:${slug}`, `products:brand:${slug}`] },
  )
}
export async function fetchProducts(params?: {
  brand?: string
  q?: string
  page?: number
  limit?: number
  status?: 'ACTIVE'
}) {
  const tags = [
    'products',
    ...(params?.brand ? [`products:brand:${params.brand}`] : []),
  ]
  return getJSON<ProductsList>(
    '/api/products',
    {
      status: params?.status ?? 'ACTIVE',
      brand: params?.brand,
      q: params?.q,
      page: params?.page,
      limit: params?.limit,
    },
    { tags },
  )
}
export async function fetchProductBySlug(slug: string) {
  return getJSON<{
    id: string
    name: string
    slug: string
    description?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    cover?: Media | null
    images?: { position: number; media: Media }[]
    variants?: (ProductVariantLite & { image?: Media | null })[]
    brand: { id: string; name: string; slug: string }
  }>(`/api/products/${slug}`,
    undefined,
    { tags: ['products', `product:${slug}`] },
  )
}
