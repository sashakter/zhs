'use client'

import { useRouter, Link } from '@/src/navigation'
import { signIn } from 'next-auth/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Title from '@/src/app/components/Title'

export default function LoginForm() {
  const router = useRouter()

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Некорректный email')
      .required(`Обов'язкове поле`),
    password: Yup.string().required(`Обов'язкове поле`),
  })

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any,
  ) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    })

    if (res?.ok) {
      router.push('/dashboard')
    } else {
      alert('Ошибка входа: Неверные учетные данные')
    }
    setSubmitting(false)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-black bg-black pt-32 pb-28  ">
      <Title title="Вхід" addClass="text-white" />
      <div className="w-full max-w-md p-3 rounded shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className=" mb-4">
                <label htmlFor="email" className="block text-white">
                  Електрона пошта
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
              <div className="mb-6">
                <label htmlFor="password" className="block text-white">
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vidbir-top text-white py-2 px-4 rounded hover:bg-custom-black transition duration-200"
              >
                Увійти
              </button>
              <div className="text-white mt-4 float-right">
                {/*/reset-password/request*/}
                <Link href="/">Забули пароль?</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-white">
        <p>
          Новий користувач?{' '}
          <Link href="/signup" className="underline">
            Зареєструватися
          </Link>
        </p>
      </div>
    </div>
  )
}
