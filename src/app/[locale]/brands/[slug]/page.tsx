import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchBrandBySlug, revalidateSeconds } from '@/src/lib/cms'
import Breadcrumbs from '@/src/app/components/catalog/Breadcrumbs'
import SearchBox from '@/src/app/components/catalog/SearchBox'
import { Link } from '@/src/navigation'

export const revalidate = revalidateSeconds

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = (await params) as { slug: string }
  const brand = await fetchBrandBySlug(slug).catch(() => null)
  if (!brand) return {}
  return {
    title: brand.seoTitle || `${brand.name} | Alcotrade`,
    description: brand.seoDescription || brand.description || undefined,
    openGraph: {
      images: brand.cover?.url ? [{ url: brand.cover.url }] : undefined,
    },
  }
}

export default async function BrandPage({
  params,
  searchParams,
}: {
  params: { locale: string; slug: string }
  searchParams: { q?: string }
}) {
  const { locale, slug } = params
  const brand = await fetchBrandBySlug(slug).catch(() => null)
  if (!brand) return notFound()

  const q = (searchParams?.q || '').trim().toLowerCase()
  const products = q
    ? brand.products.filter((p) => p.name.toLowerCase().includes(q))
    : brand.products

  const variantsLine = (
    v?: { label?: string | null; volumeMl?: number | null }[],
  ) =>
    (v ?? [])
      .map((x) => (x.label ? x.label : x.volumeMl ? `${x.volumeMl}` : ''))
      .filter(Boolean)
      .join(' ')

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
      <div className="absolute inset-0 z-0 bg-black/70" />

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <Breadcrumbs
          items={[{ label: 'Бренди', href: `/brands` }, { label: b.name }]}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <aside className="md:col-span-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-4 text-sm tracking-widest text-neutral-400">
              БРЕНДИ
            </h3>
            <div className="relative mx-auto mb-4 aspect-square w-40 overflow-hidden rounded-lg">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={coverAlt || b.name}
                  fill
                  className="object-cover"
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
                <li
                  key={p.id}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 transition-colors hover:border-neutral-600"
                >
                  <Link href={`/products/${p.slug}` as any}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                      {p.cover?.url ? (
                        <Image
                          src={p.cover.url}
                          alt={p.cover.alt || p.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="mt-3">
                      <h3 className="text-base font-medium">{p.name}</h3>
                      {p.variants?.length ? (
                        <p className="mt-1 text-sm text-neutral-400">
                          {variantsLine(p.variants)}
                        </p>
                      ) : null}
                      <div className="mt-2">
                        <span className="inline-block rounded border border-neutral-700 px-2 py-0.5 text-xs">
                          more
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
