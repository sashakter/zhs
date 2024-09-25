import test from 'node:test'
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
        news: "url('/hokey.jpg')",
        pattern: "url('/pattern.png')",
        about: "url('/about.jpg')",
        aboutpart: "url('/about-part.jpg')",
        test: "url('/test.jpg')",
      },
      textColor: {
        white: '#F7F7F7',
        black: '#212121',
        yellow: '#FFE197',
      },
      backgroundColor: {
        black: '#212121',
        white: '#F7F7F7',
        yellow: '#FFE197',
      },
      borderColor: {
        black: '#212121',
        white: '#F7F7F7',
        yellow: '#FFE197',
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
        'custom-pink': '#474646',
        'custom-black': '#434343',
        'custom-about': '#937F6B',
        'custom-capacities': '#1B1C1D',
        'running-first': '#232526',
        'running-second': '#414345',
      },
    },
  },
  plugins: [],
}
export default config
