import { Link } from '@/src/navigation'

type Crumb = { label: string; href?: string }
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-6 text-sm">
      <ol className="flex flex-wrap gap-2 text-neutral-400">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link
                href={c.href as any}
                className="underline hover:text-neutral-200"
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-neutral-200">{c.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
