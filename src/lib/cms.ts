const BASE = process.env.CMS_PUBLIC_BASE_URL!
const TOKEN = process.env.CMS_READONLY_TOKEN
// Используем минимальное значение для ISR - основной контроль через теги и revalidate endpoints
export const revalidateSeconds = 0 // Отключаем interval-based revalidation

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
  
  console.log('[CMS] Fetching:', url.toString())
  
  const res = await fetch(url.toString(), {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : undefined,
    // Используем tag-based revalidation без interval-based кэширования
    next: {
      tags: nextOpts?.tags || [],
      revalidate: false, // Полагаемся на теги для очистки кэша
    },
  })
  if (!res.ok) throw new Error(`CMS ${res.status} for ${url}`)
  return (await res.json()) as T
}

type Translation<T> = T & {
  translations: ({
    id: string
    locale: string
  } & Partial<Omit<T, 'id' | 'slug' | 'cover' | 'images' | 'brand' | 'variants' | '_count' | 'translations'>> & { slug?: string | null })[]
}

async function getTranslatedJSON<T>(
  path: string,
  locale: string,
  search?: Record<string, string | number | undefined>,
  nextOpts?: NextOpts,
) {
  const data = await getJSON<Translation<T>>(path, search, nextOpts)
  if (locale !== 'uk') {
    const translation = data.translations?.find((t) => t.locale === locale)
    if (translation) {
      for (const key in translation) {
        if (key !== 'id' && key !== 'locale' && translation[key as keyof typeof translation]) {
          // @ts-ignore
          data[key as keyof T] = translation[key as keyof typeof translation]
        }
      }
    }
  }
  return data
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
  locale?: string
}) {
  return getJSON<BrandsList>(
    '/api/brands',
    {
      status: params?.status ?? 'ACTIVE',
      q: params?.q,
      page: params?.page,
      limit: params?.limit,
      locale: params?.locale ?? 'uk',
    },
    { tags: ['brands', `brands:${params?.locale ?? 'uk'}`] },
  )
}
export async function fetchBrandBySlug(slug: string, locale: string) {
  return getTranslatedJSON<BrandLite & { products: ProductLite[] }>(
    `/api/brands/${slug}`,
    locale,
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
  locale?: string
}) {
  const tags = [
    'products',
    `products:${params?.locale ?? 'uk'}`,
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
      locale: params?.locale ?? 'uk',
    },
    { tags },
  )
}
export async function fetchProductBySlug(slug: string, locale: string) {
  return getTranslatedJSON<{
    id: string
    name: string
    slug: string
    description?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    cover?: Media | null
    images?: { position: number; media: Media }[]
    translations?: {
      id?: string
      locale: string
      name?: string | null
      slug?: string | null
      description?: string | null
      seoTitle?: string | null
      seoDescription?: string | null
    }[]
    variants?: (ProductVariantLite & {
      image?: Media | null
      translations?: { id?: string; locale: string; label?: string | null }[]
    })[]
    brand: { id: string; name: string; slug: string }
  }>(`/api/products/${slug}`,
    locale,
    undefined,
    { tags: ['products', `product:${slug}`] },
  )
}

// ============ ARTICLES (NEWS) ============

export type ArticleLite = {
  id: string
  title: string
  slug: string
  locale: string
  excerpt?: string | null
  cover?: Media | null
  date?: string | null
  publishedAt?: string | null
  status: 'DRAFT' | 'ACTIVE' | 'ARCHIVE'
}

export type ArticleDetail = ArticleLite & {
  content?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  images?: { position: number; media: Media }[]
  createdAt: string
  updatedAt: string
}

export type ArticlesList = {
  items: ArticleLite[]
  total: number
}

export async function fetchArticles(params?: {
  query?: string
  page?: number
  pageSize?: number
  status?: 'ACTIVE' | 'DRAFT' | 'ARCHIVE'
  locale?: string
  sort?: string
}) {
  return getJSON<ArticlesList>(
    '/api/articles',
    {
      status: params?.status ?? 'ACTIVE',
      query: params?.query,
      page: params?.page,
      pageSize: params?.pageSize,
      locale: params?.locale,
      sort: params?.sort ?? 'date_desc',
    },
    { tags: ['articles', `articles:${params?.locale ?? 'uk'}`] },
  )
}

export async function fetchArticleBySlug(slug: string, locale: string) {
  return getJSON<ArticleDetail>(
    `/api/articles/${slug}`,
    { locale },
    { tags: ['articles', `article:${slug}`] },
  )
}
