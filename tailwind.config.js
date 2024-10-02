/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // screens: {
    //   xs: '460px'
    // },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat',"Open Sans"]
      },
      maxWidth: {
        'screen-container': '1075px'
      },
      colors: {
        'blue-light': '#C2C2FF',
        'morado-light': '#8892B3',
        'green-light': '#F0F4FF',
        'green-light-2': '#E1E8FF',
        'dark-text': '#3F3F3F',
        'dark-bold': '#000A0A'
      }
    },
  },
  plugins: [],
}

