import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  defaultValue: string
  label: string
}

export default function LanguageSelector({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      // @ts-ignore
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  // Function to handle arrow click
  const handleArrowClick = () => {
    const selectElement = document.getElementById(
      'language-select',
    ) as HTMLSelectElement
    if (selectElement) {
      selectElement.focus() // Focus the select element
    }
  }

  return (
    <label className="relative flex items-center justify-center rounded-md border border-white px-2 text-lg">
      <p className="sr-only">{label}</p>
      <select
        id="language-select" // Add an ID to the select element for referencing
        className="relative z-10 inline-flex appearance-none bg-transparent py-1 pr-4"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-auto absolute right-2 z-0 my-auto">
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
  )
}
