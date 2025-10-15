import { Link } from '@/src/navigation'

function qs(params: Record<string, string | number | undefined>) {
  const s = new URLSearchParams()
  for (const [k, v] of Object.entries(params))
    if (v !== undefined && v !== '') s.set(k, String(v))
  const str = s.toString()
  return str ? `?${str}` : ''
}

export default function Pagination({
  basePath,
  page,
  limit,
  total,
  query = {},
  windowSize = 2,
}: {
  basePath: string
  page: number
  limit: number
  total: number
  query?: Record<string, string | number | undefined>
  windowSize?: number
}) {
  const pages = Math.max(1, Math.ceil(total / limit))
  if (pages <= 1) return null

  const start = Math.max(1, page - windowSize)
  const end = Math.min(pages, page + windowSize)
  const makeHref = (p: number) =>
    `${basePath}${qs({ ...query, page: p, limit })}`

  return (
    <nav className="mt-8 flex items-center gap-2">
      <Link
        href={makeHref(Math.max(1, page - 1)) as any}
        className="rounded-md border border-neutral-800 px-3 py-1 text-sm hover:border-neutral-600 aria-disabled:opacity-50"
        aria-disabled={page === 1}
      >
        « Попередня
      </Link>

      {start > 1 && (
        <>
          <Link
            href={makeHref(1) as any}
            className="rounded-md border border-neutral-800 px-3 py-1 text-sm hover:border-neutral-600"
          >
            1
          </Link>
          {start > 2 && <span className="px-1 text-neutral-500">…</span>}
        </>
      )}

      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
        <Link
          key={p}
          href={makeHref(p) as any}
          aria-current={p === page ? 'page' : undefined}
          className={`rounded-md px-3 py-1 text-sm ${
            p === page
              ? 'border border-neutral-600 bg-neutral-900'
              : 'border border-neutral-800 hover:border-neutral-600'
          }`}
        >
          {p}
        </Link>
      ))}

      {end < pages && (
        <>
          {end < pages - 1 && <span className="px-1 text-neutral-500">…</span>}
          <Link
            href={makeHref(pages) as any}
            className="rounded-md border border-neutral-800 px-3 py-1 text-sm hover:border-neutral-600"
          >
            {pages}
          </Link>
        </>
      )}

      <Link
        href={makeHref(Math.min(pages, page + 1)) as any}
        className="rounded-md border border-neutral-800 px-3 py-1 text-sm hover:border-neutral-600 aria-disabled:opacity-50"
        aria-disabled={page === pages}
      >
        Наступна »
      </Link>
    </nav>
  )
}
