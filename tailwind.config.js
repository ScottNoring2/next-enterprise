/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    //"./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        slate: colors.slate,
        gray: colors.gray,
        neutral: colors.neutral,
        stone: colors.stone,
        green: colors.green,
        indigo: colors.indigo,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        sky: colors.sky,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.rose,
        white: colors.white,
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
       // ...defaultTheme.width,
        'sm': '20rem',
        'md': '32rem',
        'lg': '64rem',
        'form': '100%'
      },
      maxWidth: {
        'sm': '31rem',
        'md': '32rem',
        'lg': '64rem',
        'form': '100%'
      },
      spacing: {
        'extra-tight': '4px',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      extend: { 
        
        
      },
    },
  },
  plugins: [ 
    require('@fullhuman/postcss-purgecss'),
    //require('flowbite/plugin'),
    flowbite.plugin()
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
