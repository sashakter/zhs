import { Field, Form, Formik, FormikHelpers } from 'formik'

interface ContactProps {
  name: string
  email: string
  phone: string
  message: string
}

const Contacts: React.FC<ContactProps> = () => {
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
    <div>
      <div>
        <h1>Контакти:</h1>
        <p>
          Телефон:<a href="tel:+380(67)-706-68-47">+380(67)-706-68-47</a>
        </p>
        <p>
          Пошта:
          <a href="mailto:office@alcotrade.com.ua">office@alcotrade.com.ua</a>
        </p>
        <p>
          Адреса:<a></a>
        </p>
      </div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field name="name" type="text" placeholder='Ім"я' />
            <Field name="email" type="email" placeholder="Пошта" />
            <Field name="phone" type="text" placeholder="Номер телефону" />
            <Field name="message" as="textarea" placeholder="Коментар" />
            <button type="submit">Відправити</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contacts
