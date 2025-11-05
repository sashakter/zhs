import { fetchBrands } from '@/src/lib/cms'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BrandCard from '../../components/catalog/BrandCard'

export const revalidate = 600

export default async function BrandsPage() {
  const data = await fetchBrands({ limit: 120, status: 'ACTIVE' })
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
      <div className="absolute inset-0 z-0 bg-[#000]/70"></div>

      <div className="relative z-20 mt-28 w-full max-w-6xl">
        <h1 className="mb-8 text-3xl font-semibold">Бренди</h1>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {data.items.map((b) => (
            <BrandCard key={b.id} b={b} />
          ))}
        </ul>
        {data.total === 0 && (
          <p className="mt-6 text-neutral-400">Поки що жодного бренду.</p>
        )} 
      </div>
    </main>
  )
}
