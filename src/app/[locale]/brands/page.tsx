import { fetchBrands, revalidateSeconds } from '@/src/lib/cms'
import Image from 'next/image'
import { Link } from '@/src/navigation'
import { notFound } from 'next/navigation'

export const revalidate = revalidateSeconds

export default async function BrandsPage(props: any) {
  const { params } = props
  const { locale } = (await params) as { locale: string }
  const data = await fetchBrands({ limit: 120 })
  if (!data) return notFound()

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
        <h1 className="mb-8 text-3xl font-semibold">Бренди</h1>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {data.items.map((b) => (
            <li
              key={b.id}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 transition-colors hover:border-neutral-600"
            >
              <Link href={`/brands/${b.slug}` as any}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  {b.cover?.url ? (
                    <Image
                      src={b.cover.url}
                      alt={b.cover.alt || b.name}
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
                  <h3 className="text-base font-medium">{b.name}</h3>
                  {typeof b._count?.products === 'number' && (
                    <p className="text-sm text-neutral-400">
                      {b._count.products} продуктів
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {data.total === 0 && (
          <p className="mt-6 text-neutral-400">Поки що жодного бренду.</p>
        )}
      </div>
    </main>
  )
}
