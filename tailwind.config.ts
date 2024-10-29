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
        newsMobile: "url('/hockey-mobile.jpg')",
        headerPhoto: "url('/fifth-partner.jpg')",
        pattern: "url('/pattern.png')",
        about: "url('/about.jpg')",
        aboutpart: "url('/about-part.jpg')",
        test: "url('/test.jpg')",
        productFirst: "url('/product-gold.jpg')",
        productSecond: "url('/product-diamond.jpg')",
        productThird: "url('/product-vidbirna.jpg')",
        productFourth: "url('/product-perceva.jpg')",
        contactBg: "url('/contact-bg.jpg')",
        contactBgMobile: "url('/contacts-mobile.jpg')",
        contactBackground: "url('/contact-bkg.jpg')",
        footerBkg: "url('/footer-bkg-2.jpg')",
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
        '3xl': '0 -35px 20px rgba(255, 255, 255, 0.45)',
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
        'custom-contact': '#242322',
        'custom-contactbtn': '#BB9330',
        'custom-calendar': '#C29636',
      },
    },
  },
  plugins: [],
}
export default config
