// app/register/page.tsx
'use client'

import { useRouter, Link } from '@/src/navigation'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Title from '@/src/app/components/Title'

export default function Register() {
  const router = useRouter()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: '',
    companyWebsite: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required(`Обов'язкове поле`),
    email: Yup.string().email('Невірний email').required(`Обов'язкове поле`),
    password: Yup.string()
      .min(6, 'Мінімум 6 символів')
      .required(`Обов'язкове поле`),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Паролі повинні співпадати')
      .required(`Обов'язкове поле`),
    phone: Yup.string().required(`Обов'язкове поле`),
    company: Yup.string().required(`Обов'язкове поле`),
    companyWebsite: Yup.string(),
  })

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any,
  ) => {
    try {
      const res = await axios.post('/api/register', values)

      if (res.status === 201) {
        alert('Реєстрація успішна')
        router.push('/signin')
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Помилка реєстрації')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-black pt-32 pb-28">
      <Title title="Реєстрація" addClass="text-white" />
      <div className="w-full max-w-md p-8 rounded shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4 ">
                <label htmlFor="name" className="block  text-white">
                  Ім&#39;я
                </label>
                <Field
                  type="text"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="name">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block  text-white">
                  Электрона пошта
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block  text-white">
                  Пароль
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword  text-white"
                  className="block text-white"
                >
                  Повторення паролю
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-4 ">
                <label htmlFor="phone" className="block text-white">
                  Номер телефону
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="phone">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-white">
                  Назва компанії
                </label>
                <Field
                  type="text"
                  name="company"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="company">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-6">
                <label htmlFor="companyWebsite" className="block text-white">
                  Веб-сторінка компанії
                </label>
                <Field
                  type="text"
                  name="companyWebsite"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <ErrorMessage name="companyWebsite">
                  {(msg) => (
                    <div className="text-red-500 text-sm mt-1">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vidbir-top text-white py-2 px-4 rounded hover:bg-vidbir-bottom transition duration-200"
              >
                Зареєтруватися
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-white">
        Вже зареєстровані?{' '}
        <Link className="underline" href={'/signin'}>
          Увійти
        </Link>
      </div>
    </div>
  )
}
