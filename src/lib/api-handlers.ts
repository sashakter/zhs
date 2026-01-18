/**
 * Функции для получения данных с поддержкой кэширования и revalidation
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

interface FetchOptions {
  cache?: 'no-store' | 'force-cache'
  tags?: string[]
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export interface Article {
  id: string
  title: string
  slug: string
  description?: string
  cover?: string
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  image?: string
  price?: number
}

/**
 * Получить новости с пагинацией
 */
export async function getArticles(
  page: number = 1,
  pageSize: number = 12,
  locale: string = 'uk',
  options: FetchOptions = {},
): Promise<PaginatedResponse<Article>> {
  try {
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      locale,
    })

    const res = await fetch(`${BASE_URL}/api/articles?${params}`, {
      next: { tags: options.tags || ['articles'] },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch articles')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching articles:', error)
    return { items: [], total: 0, page, pageSize }
  }
}

/**
 * Получить все бренды
 */
export async function getBrands(
  options: FetchOptions = {},
): Promise<Brand[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/brands`, {
      next: { tags: options.tags || ['brands'] },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch brands')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching brands:', error)
    return []
  }
}

/**
 * Получить все продукты с опциональной пагинацией
 */
export async function getProducts(
  page: number = 1,
  limit: number = 24,
  query?: string,
  options: FetchOptions = {},
): Promise<PaginatedResponse<Product>> {
  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    })

    if (query) {
      params.set('q', query)
    }

    const res = await fetch(`${BASE_URL}/api/products?${params}`, {
      next: { tags: options.tags || ['products'] },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return { items: [], total: 0, page, pageSize: limit }
  }
}
