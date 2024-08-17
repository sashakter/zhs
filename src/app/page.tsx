import dynamic from 'next/dynamic'
import AboutCompany from './components/AboutCompany'
import HeaderVideo from './components/HeaderVideo/HeaderVideo'

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
      </main>
    </>
  )
}

export default Page
