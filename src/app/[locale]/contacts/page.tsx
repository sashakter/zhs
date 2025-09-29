'use client'
import { useTranslations } from 'next-intl'
import Contacts from '../../components/ContactForm'

export default function ContactPage() {
  const t = useTranslations('contactForm')
  return (
    <div className="bg-black bg-cover bg-no-repeat">
      <div className="flex w-full flex-col items-center justify-center bg-contactBgMobile bg-cover bg-no-repeat py-32 lg:bg-contactBg">
        <div className="relative mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <h3 className="text-3xl uppercase">{t('title')}</h3>
          <p className="text-lg">{t('description')}</p>
        </div>
      </div>
      <div className="bg-contactBackground bg-cover bg-no-repeat">
        <Contacts />
      </div>
      <div className="w-full">
        <iframe
          className="w-full grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.292113464605!2d30.51172957613349!3d50.43565938842914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefcf11a1f0d%3A0xd3e4b6775925d4bf!2sSaksahanskoho%20St%2C%2029%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2shu!4v1728988290957!5m2!1sen!2shu"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
