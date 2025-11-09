import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchBrandBySlug } from '@/src/lib/cms'
import Breadcrumbs from '@/src/app/components/catalog/Breadcrumbs'
import SearchBox from '@/src/app/components/catalog/SearchBox'
import ProductCard from '@/src/app/components/catalog/ProductCard'

export const revalidate = 600

export async function generateMetadata(props: any) {
  const { params } = props
  const { slug, locale } = (await params) as { slug: string; locale: string }
  const brand = await fetchBrandBySlug(slug, locale).catch(() => null)
  if (!brand) return {}
  return {
    title: brand.seoTitle || `${brand.name} | Alcotrade`,
    description: brand.seoDescription || brand.description || undefined,
    openGraph: {
      images: brand.cover?.url ? [{ url: brand.cover.url }] : undefined,
    },
  }
}

export default async function BrandPage(props: any) {
  const { params, searchParams } = props
  const { locale, slug } = (await params) as { slug: string; locale: string }
  const brand = await fetchBrandBySlug(slug, locale).catch(() => null)
  if (!brand) return notFound()

  const q = (searchParams?.q || '').trim().toLowerCase()
  const products = q
    ? brand.products.filter((p) => p.name.toLowerCase().includes(q))
    : brand.products

  const b = brand!
  const coverUrl = b.cover?.url
  const coverAlt = b.cover?.alt

  return (
    <main className="relative flex flex-col items-center bg-black px-4 py-8 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/diamond.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000]/70" />

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <Breadcrumbs
          items={[{ label: 'Бренди', href: `/brands` }, { label: b.name }]}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <aside className="md:col-span-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-4 uppercase text-sm tracking-widest text-neutral-100">
              бренди
            </h3>
            <div className="relative mx-auto mb-4 aspect-square w-40 overflow-hidden rounded-lg">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={coverAlt || b.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="h-full w-full bg-neutral-900" />
              )}
            </div>
            <h2 className="mb-2 text-center text-lg font-medium">{b.name}</h2>
            {b.description && (
              <p className="text-center text-sm text-neutral-300">
                {b.description}
              </p>
            )}
          </aside>

          <section className="md:col-span-9">
            <h1 className="mb-4 text-2xl font-semibold">Продукти</h1>
            <div className="mb-6 flex items-center gap-3">
              <SearchBox placeholder="Пошук у бренді…" />
            </div>

            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
