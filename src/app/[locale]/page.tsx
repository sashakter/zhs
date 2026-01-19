import AboutCompany from '../components/AboutCompany/AboutCompany'
import HeaderVideo from '../components/HeaderVideo/HeaderVideo'
import OurBrands from '../components/OurBrands/OurBrands'
import Capacities from '../components/Capacities/Capacities'
import Partners from '../components/Partners/Partners'
import React from 'react'
import { getSections, Section } from '@/src/lib/sections'

// Маппинг ключей секций на компоненты
const sectionComponents: Record<string, React.FC> = {
  hero: HeaderVideo,
  about: AboutCompany,
  brands: OurBrands,
  capabilities: Capacities,
  partners: Partners,
}

// Секции которые рендерятся в header
const headerSections = ['hero']

// Динамическая страница с перевалидацией через теги
export const dynamic = 'force-dynamic'

export default async function Page() {
  const sections = await getSections()

  // Фильтруем видимые и сортируем по позиции
  const visibleSections: Section[] = sections
    .filter((s: Section): boolean => s.isVisible)
    .sort((a: Section, b: Section): number => a.position - b.position)

  const headerContent = visibleSections
    .filter((s) => headerSections.includes(s.key))
    .map((section) => {
      const Component = sectionComponents[section.key]
      return Component ? <Component key={section.id} /> : null
    })

  const mainContent = visibleSections
    .filter((s) => !headerSections.includes(s.key))
    .map((section) => {
      const Component = sectionComponents[section.key]
      return Component ? <Component key={section.id} /> : null
    })

  return (
    <>
      <header>{headerContent}</header>
      <main>{mainContent}</main>
    </>
  )
}
