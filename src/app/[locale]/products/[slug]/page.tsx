import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchProductBySlug, revalidateSeconds } from '@/src/lib/cms'
import Breadcrumbs from '@/src/app/components/catalog/Breadcrumbs'
import { Link } from '@/src/navigation'

export const revalidate = revalidateSeconds

export async function generateMetadata(props: any) {
  const { params } = props
  const { slug } = (await params) as { slug: string }
  const p = await fetchProductBySlug(slug).catch(() => null)
  if (!p) return {}
  return {
    title: p.seoTitle || `${p.name} | Alcotrade`,
    description: p.seoDescription || p.description || undefined,
    openGraph: {
      images: p.cover?.url
        ? [{ url: p.cover.url }]
        : p.images?.[0]?.media?.url
          ? [{ url: p.images[0].media.url }]
          : undefined,
    },
  }
}

export default async function ProductPage(props: any) {
  const { params } = props
  const { locale, slug } = (await params) as { locale: string; slug: string }
  const p = await fetchProductBySlug(slug).catch(() => null)
  if (!p) return notFound()

  const gallery = [
    ...(p.cover?.url ? [{ url: p.cover.url, alt: p.cover.alt || p.name }] : []),
    ...(p.images?.map((im) => ({
      url: im.media.url,
      alt: im.media.alt || p.name,
    })) ?? []),
  ]

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
      <div className="absolute inset-0 z-0 bg-black/70"></div>

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Бренди', href: `/brands` },
            { label: p.brand.name, href: `/brands/${p.brand.slug}` },
            { label: p.name },
          ]}
        />

        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800">
              {gallery[0]?.url ? (
                <Image
                  src={gallery[0].url}
                  alt={gallery[0].alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                  No image
                </div>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.slice(1, 5).map((g, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800"
                  >
                    <Image
                      src={g.url}
                      alt={g.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Описание и варианты */}
          <div>
            <h1 className="text-3xl font-semibold">{p.name}</h1>

            {p.variants?.length ? (
              <div className="mt-6">
                <h2 className="mb-2 text-sm tracking-wider text-neutral-400">
                  Обʼєм
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {p.variants.map((v) => (
                    <li
                      key={v.id}
                      className="cursor-pointer rounded-lg border border-neutral-700 px-3 py-1 text-sm transition-colors hover:border-neutral-500 hover:bg-neutral-800"
                    >
                      {v.label || (v.volumeMl ? `${v.volumeMl} мл` : 'Варіант')}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {p.description && (
              <p className="mt-6 text-neutral-300">{p.description}</p>
            )}

            <div className="mt-8">
              <Link
                href={`/${locale}/brands/${p.brand.slug}` as any}
                className="text-neutral-300 underline hover:text-white"
              >
                До бренду: {p.brand.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
