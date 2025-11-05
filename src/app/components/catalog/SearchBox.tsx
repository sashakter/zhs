'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Formik, Form, Field } from 'formik'

export default function SearchBox({
  placeholder = 'Пошук…',
}: {
  placeholder?: string
}) {
  const router = useRouter()
  const sp = useSearchParams()
  const initialQuery = sp.get('q') ?? ''

  return (
    <Formik
      initialValues={{ q: initialQuery }}
      enableReinitialize
      onSubmit={(values) => {
        const next = new URL(window.location.href)
        if (values.q.trim()) {
          next.searchParams.set('q', values.q.trim())
        } else {
          next.searchParams.delete('q')
        }
        next.searchParams.delete('page')
        router.push(next.pathname + next.search)
      }}
    >
      <Form className="flex items-center gap-3">
        <Field
          name="q"
          placeholder={placeholder}
          className="w-72 rounded-md border border-neutral-700 bg-black/40 px-3 py-2 outline-none focus:border-neutral-500"
        />
        <button
          type="submit"
          className="rounded-md border border-neutral-700 px-3 py-2 text-sm hover:border-neutral-500"
        >
          Пошук
        </button>
      </Form>
    </Formik>
  )
}
