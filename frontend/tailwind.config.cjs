/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'Poppins', 'serif']
      },
      colors: {
        brand: {
          dark: '#0F172A',
          accent: '#3B82F6',
          light: '#FFFFFF'
        }
      },
      backgroundImage: {
        'brand-gradient': 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.25), transparent 60%)'
      }
    }
  },
  plugins: []
};
