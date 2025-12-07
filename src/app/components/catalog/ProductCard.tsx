import Image from 'next/image'
import { Link } from '@/src/navigation'
import type { ProductLite } from '@/src/lib/cms'

export default function ProductCard({
  p,
}: {
  p: ProductLite
}) {
  const variants = p.variants
    ?.map((v) => v.label || (v.volumeMl ? `${v.volumeMl} мл` : ''))
    .filter(Boolean)
    .join(' • ')
  return (
    <li className="rounded-xl border border-neutral-800 bg-black/20 p-3 hover:border-neutral-600">
      <Link href={`/products/${p.slug}` as any}>
        <div className="relative aspect-4/5 overflow-hidden rounded-lg">
          {p.cover?.url ? (
            <Image
              src={p.cover.url}
              alt={p.cover.alt || p.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900">
              No image
            </div>
          )}
        </div>
        <div className="mt-3">
          {p.brand?.name && (
            <p className="text-sm text-neutral-400">{p.brand.name}</p>
          )}
          <h3 className="text-base font-medium">{p.name}</h3>
          {variants && <p className="text-sm text-neutral-400">{variants}</p>}
          <div className="mt-2 flex justify-end">
            <span className="inline-block rounded-md border border-neutral-700 px-4 py-2 text-sm">
              Більше
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}
