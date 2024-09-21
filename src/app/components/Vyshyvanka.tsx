import Image from 'next/image'
import Marquee, { MarqueeProps } from 'react-fast-marquee'


const Vyshyvanka: React.FC<MarqueeProps> = ({ direction }) => {
  return (
    <Marquee className='' loop={0} autoFill={true} direction={direction}>
      <Image
        className="w-14 rotate-90"
        src={'/vyshyvanka.jpg'}
        alt="Running Line"
        width={513}
        height={512}
      />
    </Marquee>
  )
}

export default Vyshyvanka
