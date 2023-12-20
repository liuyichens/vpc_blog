/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./.vitepress/theme/**/*.{js,ts,jsx,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--ui-background) / <alpha-value>)',
        foreground: 'rgb(var(--ui-foreground) / <alpha-value>)',
        contentbg: '#1c2335'
      },
    },
  },
  plugins: [],
}

