/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-bg-alt': '#0a0a0a',
        'cream': '#f0f0f0',
        'accent-beige': '#C0A080',
        'accent-taupe': '#B49B7E',
      },
      fontFamily: {
        'serif': ['var(--font-serif)'],
        'sans': ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}

