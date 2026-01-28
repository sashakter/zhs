import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchProductBySlug, fetchProducts } from '@/src/lib/cms'
import Breadcrumbs from '@/src/app/components/catalog/Breadcrumbs'
import ProductGalleryVariants from '@/src/app/components/catalog/ProductGalleryVariants'
import ProductCard from '@/src/app/components/catalog/ProductCard'

export const revalidate = 600

export async function generateMetadata(props: any) {
  const { params } = props
  const { slug, locale } = (await params) as { slug: string; locale: string }
  const p = await fetchProductBySlug(slug, locale).catch(() => null)
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
  const { slug, locale } = (await params) as { slug: string; locale: string }
  const p = await fetchProductBySlug(slug, locale).catch(() => null)
  if (!p) return notFound()

  const gallery = [
    ...(p.cover?.url
      ? [
          {
            url: p.cover.url,
            alt: p.cover.alt || p.name,
            width: p.cover.width ?? undefined,
            height: p.cover.height ?? undefined,
          },
        ]
      : []),
    ...(p.images?.map((im) => ({
      url: im.media.url,
      alt: im.media.alt || p.name,
      width: im.media.width ?? undefined,
      height: im.media.height ?? undefined,
    })) ?? []),
  ]

  // Fetch other products of the same brand (exclude current product)
  const othersList = await fetchProducts({ brand: p.brand.slug, limit: 12, status: 'ACTIVE' })
  const otherProducts = othersList.items
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => {
      const aSort = a.sortOrder ?? Number.MAX_SAFE_INTEGER
      const bSort = b.sortOrder ?? Number.MAX_SAFE_INTEGER
      return aSort - bSort
    })
    .slice(0, 8)

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
      <div className="absolute inset-0 z-0 bg-[#000]/70"></div>

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <Breadcrumbs
          items={[
            { label: locale === 'en' ? 'Brands' : 'Бренди', href: `/brands` },
            { label: p.brand.name, href: `/brands/${p.brand.slug}` },
            { label: p.name },
          ]}
        />

        <ProductGalleryVariants
          name={p.name}
          brandName={p.brand.name}
          brandSlug={p.brand.slug}
          description={p.description}
          gallery={gallery}
          locale={locale}
          variants={p.variants}
        />

        {otherProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold">Інші продукти бренду</h2>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {otherProducts.map((op) => (
                <ProductCard key={op.id} p={op} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  )
}
