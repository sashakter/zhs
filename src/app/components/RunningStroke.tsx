import Image from 'next/image'
import Marquee from 'react-fast-marquee'
const RunningSroke = () => {
  return (
    <Marquee
      loop={0}
      autoFill={true}
      speed={30}
      className="from-running-first to-running-second bg-gradient-to-b absolute -bottom-6 left-0 w-full"
      >
      <Image
        className="mr-20 w-36 py-5"
        src={'/running.png'}
        alt="Running Line Image"
        width={386}
        height={80}
      />
    </Marquee>
  )
}
export default RunningSroke
