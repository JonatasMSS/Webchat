import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Wheat: '#F4F4F4',
        MBlue: '#57C4E7'
      },
      fontFamily: {
        sans: 'var(--font-k2d)'
      }
    },
  },
  plugins: [],
}
export default config
