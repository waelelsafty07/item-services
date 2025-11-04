import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}', './data/**/*.json'],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        sky: '#3B82F6'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['"Playfair Display"', 'Poppins', 'serif']
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59, 130, 246, 0.35), transparent 65%)'
      }
    }
  },
  plugins: []
};

export default config;
