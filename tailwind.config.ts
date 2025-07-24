import type { Config } from 'tailwindcss'

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
        
      }

    },
  },
  plugins: [],
}
export default config
