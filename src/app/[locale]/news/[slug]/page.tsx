import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Link } from '@/src/navigation'
import { getTranslations } from 'next-intl/server'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoArrowBack } from 'react-icons/io5'
import { fetchArticleBySlug, fetchArticles } from '@/src/lib/cms'
import Title from '../../../components/Title'
import NewsCard from '../../../components/news/NewsCard'

export const revalidate = 600

export async function generateMetadata(props: any) {
  const { params } = props
  const { slug, locale } = (await params) as { slug: string; locale: string }
  const article = await fetchArticleBySlug(slug, locale).catch(() => null)
  if (!article) return {}
  
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt || undefined,
    openGraph: {
      images: article.cover?.url ? [{ url: article.cover.url }] : undefined,
    },
  }
}

export default async function NewsSlugPage(props: any) {
  const { params } = props
  const { slug, locale } = (await params) as { slug: string; locale: string }
  
  console.log('=== NewsSlugPage Debug ===')
  console.log('Params:', { slug, locale })
  
  const t = await getTranslations({ locale, namespace: 'News' })
  
  const article = await fetchArticleBySlug(slug, locale).catch((e) => {
    console.log('Fetch error:', e.message)
    return null
  })
  
  console.log('Article found:', article ? `${article.title} (locale: ${article.locale})` : 'NOT FOUND')
  
  if (!article) return notFound()

  const displayDate = article.date || article.publishedAt
  const formattedDate = displayDate
    ? new Date(displayDate).toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : null

  // Fetch other articles (exclude current)
  const otherArticlesList = await fetchArticles({ 
    pageSize: 4, 
    status: 'ACTIVE',
    locale,
    sort: 'date_desc'
  })
  const otherArticles = otherArticlesList.items
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <div className="relative flex min-h-screen w-full flex-col px-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/diamond.jpg"
          alt="Background"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#000]/50" />
      
      <main className="relative z-20 mx-auto w-full max-w-4xl px-4 py-32">
        {/* Back link */}
        <Link
          href="/news"
          locale={locale as 'uk' | 'en'}
          className="mb-8 inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-white"
        >
          <IoArrowBack size={20} />
          <span>{t('backToNews') || 'Назад до новин'}</span>
        </Link>

        <article className="rounded-xl bg-black/50 p-6 backdrop-blur-sm lg:p-10">
          {formattedDate && (
            <div className="mb-4 flex items-center gap-2 text-neutral-400">
              <IoCalendarOutline size={18} />
              <time>{formattedDate}</time>
            </div>
          )}

          <h1 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl">
            {article.title}
          </h1>

          {/* Cover image */}
          {article.cover?.url && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={article.cover.url}
                alt={article.cover.alt || article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          {article.content && (
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}

          {/* Additional images */}
          {article.images && article.images.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {article.images
                .sort((a, b) => a.position - b.position)
                .map((img, idx) => (
                  <div key={idx} className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={img.media.url}
                      alt={img.media.alt || `${article.title} - ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          )}
        </article>

        {/* Other articles */}
        {otherArticles.length > 0 && (
          <section className="mt-16">
            <Title title={t('otherNews') || 'Інші новини'} earColor="#fff" />
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {otherArticles.map((a) => (
                <NewsCard key={a.id} article={a} buttonText={t('button')} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}