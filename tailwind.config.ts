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
        primary: '#0097A7',
        secondary: '#000000',
        'blue-dark': '#1E3A8A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default config