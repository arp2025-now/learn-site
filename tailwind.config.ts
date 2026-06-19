import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0f0e22',
        card: '#1a1830',
        'card-border': '#2d2b50',
        cyan: '#00d4a0',
        gold: '#e8c84a',
        purple: '#8b5cf6',
        green: '#4ade80',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', 'Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}

export default config
