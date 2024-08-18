'use client'

import Ear from './Ear'
import EarTitle from './EarTitle'

const ContactBar: React.FC = () => {
  return (
    <div className="flex cursor-pointer flex-col items-start gap-1">
      <div className="flex w-[300px] items-center justify-between">
        <span className="text-2xl uppercase">звʼязок з нами</span>
        <Ear fill="#fff" />
      </div>
      <div className="rotate-180">
        <EarTitle color="#fff" />
      </div>
    </div>
  )
}

export default ContactBar
