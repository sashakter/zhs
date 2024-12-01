import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '../config'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  // Import the messages for the given locale
  const messages = await import(`../messages/${locale}.json`)

  // Return the configuration object as expected
  return {
    messages: messages.default, // This must be present
  }
})
