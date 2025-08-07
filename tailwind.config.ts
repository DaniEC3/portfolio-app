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
      backgroundImage: {
        'hero-pattern': "url('//to/image.svg')",
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        cursive: ['var(--font-great-vibes)', 'cursive'],
      },
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        background: 'rgb(var(--background-color) / <alpha-value>)',
        text: 'rgb(var(--text-color) / <alpha-value>)',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s ease-in-out',
      },


    },
  },
  plugins:
    [
      animate
    ],
}


export default config
