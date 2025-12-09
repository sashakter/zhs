import Image from 'next/image'
import { Link } from '@/src/navigation'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import type { ArticleLite } from '@/src/lib/cms'

type Props = {
  article: ArticleLite
  buttonText: string
}

export default function NewsCard({ article, buttonText }: Props) {
  // Приоритет: date → publishedAt
  const displayDate = article.date || article.publishedAt
  const formattedDate = displayDate
    ? new Date(displayDate).toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <div className="flex w-[350px] flex-col rounded-xl bg-black">
      {article.cover?.url ? (
        <Image
          src={article.cover.url}
          alt={article.cover.alt || article.title}
          width={article.cover.width || 816}
          height={article.cover.height || 819}
          className="aspect-square w-full rounded-t-xl object-cover"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-t-xl bg-neutral-800">
          <span className="text-neutral-500">Без зображення</span>
        </div>
      )}
      <div className="flex flex-col px-4 py-2">
        {formattedDate && (
          <div className="mb-3 mt-2 flex w-36 items-center justify-center gap-2 rounded-2xl bg-custom-calendar p-1">
            <span>
              <IoCalendarOutline size={20} />
            </span>
            <p className="roboto">{formattedDate}</p>
          </div>
        )}
        <h3 className="mb-2 text-xl font-semibold line-clamp-2">{article.title}</h3>
        {article.excerpt && (
          <p className="mb-3 min-h-16 text-sm text-neutral-300 line-clamp-3">
            {article.excerpt}
          </p>
        )}
        <Link
          href={{ pathname: '/news/[slug]', params: { slug: article.slug } }}
          className="mb-4 flex cursor-pointer justify-end"
        >
          <div className="flex w-36 items-center justify-center gap-1 rounded-2xl bg-custom-calendar px-2 py-2 text-center transition-colors hover:bg-custom-calendar/80">
            <p className="roboto">{buttonText}</p>
            <span>
              <IoIosArrowForward size={15} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
