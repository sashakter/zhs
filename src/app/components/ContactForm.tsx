'use client'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import * as Yup from 'yup'
import { MdDoneOutline } from 'react-icons/md'
import Link from 'next/link'

interface ContactProps {
  name: string
  surname: string
  email: string
  phone: string
  message: string
  location: string
}

const Contacts: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    surname: '',
    location: '',
  }

  const [success, setSuccess] = useState(false)

  const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const [location, setLocation] = useState('')
  const [countryName, setCountryName] = useState('')

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/')
        setLocation(response.data.country_code)
        setCountryName(response.data.country_name)
      } catch (error) {
        console.log(error)
      }
    }

    fetchLocation()
  }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обовʼязкове поле'),
    surname: Yup.string().min(3, 'Введіть коректні дані'),
    email: Yup.string()
      .email('Невірний формат пошти')
      .required('Обовʼязкове поле'),
    phone: Yup.string().required('Обовʼязкове поле'),
    message: Yup.string(),
  })

  const handleSubmit = async (
    values: ContactProps,
    actions: FormikHelpers<ContactProps>,
  ) => {
    values.location = countryName
    console.log(values)
    await sleep(500)
    setSuccess(true)
    actions.resetForm()
  }

  return (
    <div className="flex flex-col gap-10 py-24 text-black">
      <div className="flex items-center justify-center gap-24">
        <div className="flex flex-col items-center gap-12 text-lg">
          <div className="bg-custom-contact flex w-[325px] items-center gap-5 rounded-lg py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <MdCall size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Номер телефону</span>
              <a href="tel:+380(67)-706-68-47">+380(67)-706-68-47</a>
            </div>
          </div>
          <div className="bg-custom-contact flex w-[325px] items-center gap-5 rounded-lg py-2 pl-4 pr-10">
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
          <div className="bg-custom-contact flex w-[325px] items-center gap-5 rounded-lg py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <MdLocationPin size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Адреса</span>
              <a> м. Київ</a>
            </div>
          </div>
          <div className="bg-custom-contact flex w-[325px] items-center gap-5 rounded-lg py-2 pl-4 pr-10">
            <div className="rounded-full bg-white p-2">
              <FaInstagram size={40} />
            </div>
            <div className="flex flex-col justify-center gap-1 text-white">
              <span className="text-2xl">Instagram</span>
              <a href="https://www.instagram.com/zhitnia_sloza_?igsh=MWN0NW43cDBtaWg4bw==">
                zhitnia_sloza
              </a>
            </div>
          </div>
        </div>
        <div className="bg-custom-contact rounded-lg p-9 xl:max-w-[600px]">
          {success ? (
            <div className="flex min-h-[470px] min-w-[528px] flex-col items-center justify-center gap-8 text-white">
              <MdDoneOutline size={70} />
              <span className="text-center text-2xl uppercase leading-9 tracking-wide">
                Дякуємо, ваш запит надіслано
                <br /> Ми відповімо найближчим часом!
              </span>
              <Link
                className="rounded-md border border-white px-6 py-2 text-lg font-medium tracking-wide hover:bg-white hover:text-black hover:duration-500"
                href="/"
              >
                Повернутися на головну
              </Link>
            </div>
          ) : (
            <div>
              <h4 className="mb-3 text-2xl uppercase text-white">
                Контактна Форма
              </h4>
              <p className="mb-6 text-base tracking-wide text-white">
                Заповніть необхідну інформацію, щоб ми мали змогу надати вам
                швидку відповідь!
              </p>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ setFieldValue, values }) => (
                  <Form className="flex flex-col items-start gap-5">
                    <div className="flex w-full gap-4">
                      <div className="flex w-full flex-col">
                        <Field
                          className="h-[50px] w-full rounded-md border border-white bg-inherit px-2 py-3 text-white"
                          name="name"
                          type="text"
                          placeholder="Ім&#39;я"
                        />
                        <ErrorMessage
                          className="text-red-600"
                          name="name"
                          component={'span'}
                        />
                      </div>
                      <div className="flex w-full flex-col">
                        <Field
                          className="h-[50px] w-full rounded-md border border-white bg-inherit px-2 py-3 text-white"
                          name="surname"
                          type="text"
                          placeholder="Прізвище"
                        />
                        <ErrorMessage
                          className="text-red-600"
                          name="surname"
                          component={'span'}
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-4">
                      <div className="flex w-full flex-col">
                        <Field
                          className="h-[50px] w-full rounded-md border border-white bg-inherit px-2 py-3 text-white"
                          name="email"
                          type="email"
                          placeholder="Пошта"
                        />
                        <ErrorMessage
                          className="text-red-600"
                          name="email"
                          component={'span'}
                        />
                      </div>
                      <div className="flex w-full flex-col">
                        <PhoneInput
                          country={location.toLowerCase()}
                          value={values.phone}
                          onChange={(phone) => setFieldValue('phone', phone)}
                          inputProps={{
                            name: 'phone',
                            required: true,
                          }}
                          inputStyle={{
                            width: '100%',
                            paddingLeft: '50px',
                            borderRadius: '6px',
                            height: '50px',
                            backgroundColor: '#242322',
                            color: '#fff',
                          }}
                        />
                        <ErrorMessage
                          className="text-red-600"
                          name="phone"
                          component={'span'}
                        />
                      </div>
                    </div>
                    <div className="flex w-full flex-col">
                      <Field
                        className="w-full rounded-md border border-white bg-inherit px-2 py-3 text-white"
                        name="message"
                        style={{ resize: 'none' }}
                        as="textarea"
                        placeholder="Коментар"
                        columns={8}
                        rows={5}
                      />
                      <ErrorMessage
                        className="text-red-600"
                        name="message"
                        component={'span'}
                      />
                    </div>
                    <button className="bg-custom-contactbtn rounded-md px-6 py-2 text-2xl font-medium tracking-wide text-white hover:bg-white hover:text-black hover:duration-700">
                      Надіслати
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contacts
