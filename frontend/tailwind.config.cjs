/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}', './data/**/*.json'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['"Playfair Display"', 'Poppins', 'serif']
      },
      colors: {
        brand: {
          dark: '#0F172A',
          accent: '#3B82F6',
          light: '#FFFFFF'
        },
        midnight: '#0F172A',
        sky: {
          DEFAULT: '#3B82F6'
        }
      },
      backgroundImage: {
        'brand-gradient':
          'radial-gradient(circle at top left, rgba(59, 130, 246, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.25), transparent 60%)',
        'hero-gradient-light':
          'radial-gradient(circle at 12% 18%, rgba(59, 130, 246, 0.18), transparent 60%), radial-gradient(circle at 82% 12%, rgba(125, 211, 252, 0.22), transparent 55%), linear-gradient(180deg, rgba(241, 245, 249, 0.85) 0%, rgba(255, 255, 255, 0.95) 60%, #ffffff 100%)',
        'hero-gradient-dark':
          'radial-gradient(circle at 10% 15%, rgba(59, 130, 246, 0.35), transparent 60%), radial-gradient(circle at 85% 10%, rgba(56, 189, 248, 0.35), transparent 55%), linear-gradient(180deg, rgba(15, 23, 42, 0.94) 0%, rgba(2, 6, 23, 0.95) 65%, rgba(2, 6, 23, 1) 100%)'
      }
    }
  },
  plugins: []
};
