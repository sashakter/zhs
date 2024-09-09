import dynamic from 'next/dynamic'
import AboutCompany from './components/AboutCompany'
import HeaderVideo from './components/HeaderVideo/HeaderVideo'
import Benefits from './components/Benefits'
import News from './components/News'
import OurBrands from './components/OurBrands'
import Capacities from './components/Capacities'

const Chooser = dynamic(() => import('./components/Chooser/Chooser'), {
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
        {/* <div>
          <Chooser />
        </div> */}
        {/* <Benefits /> */}
        <Capacities />
        <News />
      </main>
    </>
  )
}

export default Page
