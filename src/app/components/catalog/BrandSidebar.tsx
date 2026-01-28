import Image from 'next/image'
import { Link } from '@/src/navigation'
import { fetchBrands } from '@/src/lib/cms'

export default async function BrandSidebar({
  title = 'Перелік брендів',
  locale = 'uk',
}: {
  title?: string
  locale?: string
}) {
  const data = await fetchBrands({ limit: 100, status: 'ACTIVE' })
  
  // Сортируем по sortOrder
  const sortedItems = [...data.items].sort((a, b) => {
    const aSort = a.sortOrder ?? Number.MAX_SAFE_INTEGER
    const bSort = b.sortOrder ?? Number.MAX_SAFE_INTEGER
    return aSort - bSort
  })

  return (
    <aside className="hidden w-72 shrink-0 self-start rounded-xl border border-neutral-800 bg-black/20 p-4 md:block">
      <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {sortedItems.map((b) => (
          <li
            key={b.id}
            className="rounded-lg border border-neutral-800 p-2 hover:border-neutral-600"
          >
            <Link
              href={`/brands/${b.slug}` as any}
              className="flex items-center gap-5"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded">
                {b.cover?.url ? (
                  <Image
                    src={b.cover.url}
                    alt={b.cover.alt || b.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="h-full w-full bg-neutral-900" />
                )}
              </div>
              <span className="text-md">{b.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
