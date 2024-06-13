import { commonColors, nextui } from '@nextui-org/theme'
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './config/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: defaultTheme.fontFamily.serif,
        mono: defaultTheme.fontFamily.mono,
      },
      fontSize: {
        'xss': '0.625rem', // 10px
      },
      width: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '6xl': '72rem',
      },
      colors: commonColors,
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    plugin(({addComponents, addVariant}) => {
      addComponents({
        // Flex Pattern
        '.flex-column': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-center-col': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        '.flex-center-ver': {
          display: 'flex',
          alignItems: 'center',
        },
        '.flex-center-hor': {
          display: 'flex',
          justifyContent: 'center',
        },
        '.gradient': {
          background: 'linear-gradient(60deg,#61dafb 0%,#d6cbf6 30%,#f2056f 70%)',
        },
      })
      addVariant('child', '& > ')
      addVariant('child-all', '& > *')
      addVariant('child-all-hover', '& > *:hover')
    }),    
  ],
}
