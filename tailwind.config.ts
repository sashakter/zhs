import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        white: '#F7F7F7',
        black: '#0D0C0C',
        yellow: '#C6986D',
      },
      backgroundColor: {
        black: '#0D0C0C',
        white: '#F7F7F7',
        yellow: '#C6986D',
      },
      borderColor: {
        black: '#0D0C0C',
        white: '#F7F7F7',
        yellow: '#C6986D',
      },
      dropShadow: {
        '2xl': '0 0 10px rgb(194 153 113 / 0.25)',
      },
      colors: {
        'gold-yellow-top': '#FCEABB',
        'gold-yellow-bottom': '#815E00',
        'diamond-top': '#E2E2E2',
        'diamond-bottom': '#CEDAFF',
        'vidbir-top': '#C6986D',
        'vidbir-bottom': '#252522',
        'perceva-top': '#C5AD4C',
        'perceva-bottom': '#D44647',
      },
    },
  },
  plugins: [],
}
export default config
