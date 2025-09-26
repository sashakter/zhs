import AboutCompany from '../components/AboutCompany/AboutCompany'
import HeaderVideo from '../components/HeaderVideo/HeaderVideo'
import OurBrands from '../components/OurBrands/OurBrands'
import Capacities from '../components/Capacities/Capacities'
import Partners from '../components/Partners/Partners'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      <header>
        <HeaderVideo />
      </header>
      <main>
        <AboutCompany />
        <OurBrands />
        <Capacities />
        <Partners />
        {/* <News /> */}
      </main>
    </>
  )
}

export default Page
