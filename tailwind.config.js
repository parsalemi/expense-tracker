/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    colors: {
      basic: {
        100: 'var(--basic-100)',
        200: 'var(--basic-200)',
        300: 'var(--basic-300)',
        400: 'var(--basic-400)',
        500: 'var(--basic-500)',
        'gradient': 'var(--gradient-bg)',
        'tr': 'var(--basic-tr)'
      },
      primary: {
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
        'gradient': 'var(--gradient-primary)',
        'tr-bg': 'var(--primary-disabled-bg)',
        'tr': 'var(--primary-disabled-text)'
      },
    }
  },
  plugins: [],
}

