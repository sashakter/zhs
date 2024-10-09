import Contacts from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-black bg-cover bg-no-repeat">
      <div className="flex w-full flex-col items-center justify-center bg-contactBgMobile lg:bg-contactBg bg-cover bg-no-repeat py-32">
        <div className="relative mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <h3 className="text-3xl uppercase">Зв'яжіться з нами!</h3>
          <p className="text-lg">
            Заповніть контактну форму нижче для подальшої співпраці
          </p>
        </div>
      </div>
      <div className="bg-contactBackground bg-cover bg-no-repeat">
        <Contacts />
      </div>
      <div>
        <iframe
          className="grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.837683488433!2d30.493611776097516!3d50.44412398781984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef37e4b9011%3A0x85003f5b654854f6!2z0YPQuy4g0KHQsNC60YHQsNCz0LDQvdGB0LrQvtCz0L4sIDEzOSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1726918074205!5m2!1sru!2sua"
          width="600"
          height="450"
          style={{ border: '0', width: '100%' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
