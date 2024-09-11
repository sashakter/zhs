import dynamic from 'next/dynamic'
import AboutCompany from './components/AboutCompany'
import HeaderVideo from './components/HeaderVideo/HeaderVideo'
import Benefits from './components/Benefits'
import News from './components/News'
import OurBrands from './components/OurBrands'
import Capacities from './components/Capacities'
import Partners from './components/Benefits'

const Chooser = dynamic(() => import('./zhytnya-slyoza/page'), {
  ssr: false,
})

const Page: React.FC = () => {
  return (
    <>
      <header>
        <HeaderVideo />
      </header>
      <main>
        <AboutCompany />
        <OurBrands />
        <Partners />
        <Capacities />
        {/* <News /> */}
      </main>
    </>
  )
}

export default Page
