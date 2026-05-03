import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c6a86a',
        charcoal: '#0d0d0f'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(198, 168, 106, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
