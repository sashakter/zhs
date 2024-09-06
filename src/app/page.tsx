import dynamic from 'next/dynamic'
import AboutCompany from './components/AboutCompany'
import HeaderVideo from './components/HeaderVideo/HeaderVideo'
import Benefits from './components/Benefits'
import News from './components/News'

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
        <div>
          <Chooser />
        </div>
        <Benefits />
        <News />
      </main>
    </>
  )
}

export default Page
