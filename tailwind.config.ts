import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pr-light': '#2ecfca',
        'pr-dark': '#20928e',
        'sc-light': '#f0f0f0',
        'sc-dark': '#dce3e6',
      },
      spacing: {
        '128': '32rem',
        '176': '44rem'
      },
      maxWidth: {
        pr: '120rem'
      }
    },

  },
  plugins: [],
}
export default config
