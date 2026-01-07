import Image from 'next/image'
import { Link } from '@/src/navigation'
import { getTranslations } from 'next-intl/server'
import Title from '../../components/Title'
import { fetchArticles } from '@/src/lib/cms'
import NewsCard from '../../components/news/NewsCard'
import Pagination from '../../components/catalog/Pagination'

export const revalidate = 600

export async function generateMetadata(props: any) {
  const { params } = props
  const { locale } = (await params) as { locale: string }
  const t = await getTranslations({ locale, namespace: 'News' })
  
  return {
    title: t('seoTitle') || t('title'),
    description: t('seoDescription') || undefined,
  }
}

export default async function NewsPage(props: any) {
  const { params, searchParams } = props
  const resolvedParams = await params
  const locale = resolvedParams.locale ?? 'uk'
  const t = await getTranslations({ locale, namespace: 'News' })
  
  const sp = (await searchParams) as {
    page?: string
    pageSize?: string
  }
  const page = Math.max(1, Number(sp?.page || 1))
  const pageSize = Math.min(24, Math.max(6, Number(sp?.pageSize || 12)))

  const data = await fetchArticles({ 
    page, 
    pageSize, 
    status: 'ACTIVE',
    locale,
    sort: 'date_desc'
  })

  return (
    <div className="relative flex h-full w-full flex-col justify-center px-3">
      <div className="absolute inset-0 z-0">
        <Image
          src="/diamond.jpg"
          alt="Background"
          fill={true}
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#022]/50" />
      <div className="relative z-20 my-32 max-w-6xl mx-auto">
        <div className="mb-14">
          <Title title={t('title')} earColor="#fff" />
        </div>
        
        {data.items.length === 0 ? (
          <p className="text-center text-neutral-400">{t('noNews') || 'Новин поки немає'}</p>
        ) : (
          <>
            <div className="mb-10 flex flex-row flex-wrap items-center justify-center gap-12">
              {data.items.map((article) => (
                <NewsCard key={article.id} article={article} buttonText={t('button')} locale={locale} />
              ))}
            </div>
            
            {data.total > pageSize && (
              <div className="flex justify-center">
                <Pagination
                  basePath="/news"
                  page={page}
                  limit={pageSize}
                  total={data.total}
                />
              </div>
            )}
          </>
        )}
        
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex gap-6">
            <Link href="/products">
              <Image
                src="/sloza.png"
                alt="Житня Сльоза"
                width={500}
                height={500}
                className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(194,153,113,0.25)] hover:duration-150 lg:w-44"
              />
            </Link>
            <a href="https://hckremenchuk.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/hokey-logo.png"
                alt="Хокейний клуб"
                width={250}
                height={224}
                className="mb-6 w-24 drop-shadow-2xl hover:drop-shadow-[0_15px_15px_rgba(135,217,255,0.25)] hover:duration-150 lg:w-44"
              />
            </a>
          </div>
          <h2 className="text-center text-3xl leading-10">{t('text')}</h2>
        </div>
      </div>
    </div>
  )
}
