'use client'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import Title from './Title'
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
      <Title title="Контакти" />
      <div className="flex flex-wrap items-center justify-around">
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
            Телефон:<a href="tel:+380(67)-706-68-47">+380(67)-706-68-47</a>
          </p>
          <p>
            Пошта:
            <a href="mailto:office@alcotrade.com.ua">office@alcotrade.com.ua</a>
          </p>
          <p>
            Адреса:<a> м. Київ</a>
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col items-center gap-5">
            <Field
              className="rounded-md border border-white bg-inherit px-2 py-3"
              name="name"
              type="text"
              placeholder="Ім&#39;я"
            />
            <Field
              className="rounded-md border border-white bg-inherit px-2 py-3"
              name="email"
              type="email"
              placeholder="Пошта"
            />
            <Field
              className="rounded-md border border-white bg-inherit px-2 py-3"
              name="phone"
              type="text"
              placeholder="Номер телефону"
            />
            <Field
              className="rounded-md border border-white bg-inherit px-2 py-3"
              name="message"
              as="textarea"
              placeholder="Коментар"
              columns={8}
              rows={10}
            />
            <button type="submit">Відправити</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contacts
