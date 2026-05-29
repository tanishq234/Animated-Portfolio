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
        primary: '#121212',
        secondary: '#1a1a1a',
        card: '#1e1e1e',
        'accent-violet': '#7C3AED',
        'accent-cyan': '#06B6D4',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(6,182,212,0.05) 100%)',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-combined': '0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(6, 182, 212, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
