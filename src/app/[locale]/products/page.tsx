import { fetchProducts } from '@/src/lib/cms'
import BrandSidebar from '@/src/app/components/catalog/BrandSidebar'
import SearchBox from '@/src/app/components/catalog/SearchBox'
import Pagination from '@/src/app/components/catalog/Pagination'
import ProductCard from '@/src/app/components/catalog/ProductCard'
import Image from 'next/image'

// Динамическая страница с перевалидацией через теги
export const revalidate = false
export const dynamic = 'force-dynamic'

export default async function ProductsAllPage(props: any) {
  const { params, searchParams } = props
  const resolvedParams = await params
  const locale = resolvedParams.locale ?? 'uk'
  const sp = (await searchParams) as {
    q?: string
    page?: string
    limit?: string
  }
  const page = Math.max(1, Number(sp?.page || 1))
  const limit = Math.min(48, Math.max(12, Number(sp?.limit || 24)))
  const q = sp?.q

  const data = await fetchProducts({ q, page, limit, status: 'ACTIVE' })

  return (
    <main className="relative flex flex-col items-center bg-black px-4 py-8 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/diamond.jpg"
          alt="Background"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000]/70" />

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <div className="flex gap-8">
          <BrandSidebar locale={locale} />
          <section className="flex-1">
            <h1 className="mb-4 text-2xl font-semibold">Продукти</h1>
            <div className="mb-6">
              <SearchBox placeholder="Пошук продуктів…" />
            </div>

            {data.items.length === 0 ? (
              <p className="text-neutral-400">Нічого не знайдено.</p>
            ) : (
              <>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {data.items.map((p) => (
                    <ProductCard key={p.id} p={p} />
                  ))}
                </ul>

                <Pagination
                  basePath={`/products`}
                  page={page}
                  limit={limit}
                  total={data.total}
                  query={{ q }}
                />
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
