'use client'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'

interface ContactProps {
  name: string
  email: string
  phone: string
  message: string
}

const Contacts: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const handleSubmit = (
    values: ContactProps,
    actions: FormikHelpers<ContactProps>,
  ) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center justify-around gap-10">
        <div className="flex flex-col items-center gap-5 text-lg">
          <Image
            src={'/alcotrade-logo.svg'}
            className="top-1 drop-shadow-2xl max-[1023px]:w-20 lg:w-96 lg:px-7"
            alt="logo"
            priority={true}
            width={1000}
            height={1000}
          />
          <p>
            Телефон: <a href="tel:+380(67)-706-68-47">+380(67)-706-68-47</a>
          </p>
          <p>
            Пошта:{' '}
            <a href="mailto:office@alcotrade.com.ua">office@alcotrade.com.ua</a>
          </p>
          <p>
            Адреса:<a> м. Київ</a>
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col gap-5 xl:min-w-[375px]">
            <Field
              className="w-full rounded-md border border-white bg-inherit px-2 py-3"
              name="name"
              type="text"
              placeholder="Ім&#39;я"
            />
            <Field
              className="w-full rounded-md border border-white bg-inherit px-2 py-3"
              name="email"
              type="email"
              placeholder="Пошта"
            />
            <Field
              className="w-full rounded-md border border-white bg-inherit px-2 py-3"
              name="phone"
              type="text"
              placeholder="Номер телефону"
            />
            <Field
              className="w-full rounded-md border border-white bg-inherit px-2 py-3"
              name="message"
              as="textarea"
              placeholder="Коментар"
              columns={8}
              rows={5}
            />
            <button className="rounded-sm border border-white bg-white px-5 py-2 text-2xl font-medium uppercase text-black hover:bg-custom-black hover:text-white hover:duration-700">
              Відправити
            </button>
          </Form>
        </Formik>
        <iframe
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

export default Contacts
