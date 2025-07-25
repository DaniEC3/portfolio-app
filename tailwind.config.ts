import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';


const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--primary-font)']
      },
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        background: 'rgb(var(--background-color) / <alpha-value>)',
        text: 'rgb(var(--text-color) / <alpha-value>)',
      }

    },
  },
  plugins:
    [
      animate
    ],
}


export default config
