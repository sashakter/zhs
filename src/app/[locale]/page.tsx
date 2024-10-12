import dynamic from 'next/dynamic'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import HeaderVideo from '../components/HeaderVideo/HeaderVideo'
import Benefits from '../components/Partners/Partners'
import News from '../components/News'
import OurBrands from '../components/OurBrands/OurBrands'
import Capacities from '../components/Capacities/Capacities'
import Partners from '../components/Partners/Partners'
import RunningSroke from '../components/RunningStroke'

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
        <Capacities />
        <Partners />
        {/* <News /> */}
      </main>
    </>
  )
}

export default Page
