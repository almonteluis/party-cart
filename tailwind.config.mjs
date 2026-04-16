/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          charcoal: '#1a1a1a',
          gold: '#c9a84c',
          cream: '#f5f0e8',
          sage: '#6b7c5e',
          pink: '#e91e8c',
          'pink-light': '#f472b6',
          'pink-dark': '#be185d',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
