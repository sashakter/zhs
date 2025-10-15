import Image from 'next/image'
import { Link } from '@/src/navigation'
import type { BrandLite } from '@/src/lib/cms'

export default function BrandCard({
  b,
  locale = 'uk',
}: {
  b: BrandLite
  locale?: string
}) {
  return (
    <li className="rounded-xl border border-neutral-800 bg-black/20 p-3 hover:border-neutral-600">
      <Link href={`/${locale}/brands/${b.slug}` as any}>
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
  )
}
