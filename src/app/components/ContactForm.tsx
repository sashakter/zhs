'use client'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'

interface ContactProps {
  name: string
  surname: string
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
    surname: '',
  }

  const handleSubmit = (
    values: ContactProps,
    actions: FormikHelpers<ContactProps>,
  ) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <div className="flex flex-col gap-10 py-24 text-black">
      <div className="flex items-center justify-center gap-24">
        <div className="flex flex-col items-center gap-12 text-lg">
          <div className="flex w-[325px] items-center gap-5 rounded-lg bg-custom-contact py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <MdCall size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Номер телефону</span>
              <a href="tel:+380(67)-706-68-47">+380(67)-706-68-47</a>
            </div>
          </div>
          <div className="flex w-[325px] items-center gap-5 rounded-lg bg-custom-contact py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <MdEmail size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Пошта</span>
              <a href="mailto:office@alcotrade.com.ua">
                office@alcotrade.com.ua
              </a>
            </div>
          </div>
          <div className="flex w-[325px] items-center gap-5 rounded-lg bg-custom-contact py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <MdLocationPin size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Адреса</span>
              <a> м. Київ</a>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-custom-contact p-9 xl:max-w-[600px]">
          <h4 className="text-2xl text-white mb-3 uppercase">Контактна Форма</h4>
          <p className="text-base text-white mb-6 tracking-wide">
            Заповніть необхідну інформацію, щоб ми мали змогу надати вам швидку
            відповідь!
          </p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col items-start gap-5">
              <div className="flex gap-4 w-full">
                <Field
                  className="w-full rounded-md border border-white text-white bg-inherit px-2 py-3"
                  name="name"
                  type="text"
                  placeholder="Ім&#39;я"
                />
                <Field
                  className="w-full rounded-md border border-white text-white bg-inherit px-2 py-3"
                  name="surname"
                  type="text"
                  placeholder="Прізвище"
                />
              </div>
              <div className="flex gap-4 w-full">
                <Field
                  className="w-full rounded-md border border-white text-white bg-inherit px-2 py-3"
                  name="email"
                  type="email"
                  placeholder="Пошта"
                />
                <Field
                  className="w-full rounded-md border border-white text-white bg-inherit px-2 py-3"
                  name="phone"
                  type="text"
                  placeholder="Номер телефону"
                />
              </div>
              <Field
                className="w-full rounded-md border border-white text-white bg-inherit px-2 py-3"
                name="message"
                as="textarea"
                placeholder="Коментар"
                columns={8}
                rows={5}
              />
              <button className="rounded-md bg-custom-contactbtn tracking-wide px-6 py-2 text-2xl font-medium text-white hover:bg-white hover:text-black hover:duration-700">
                Надіслати
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contacts
