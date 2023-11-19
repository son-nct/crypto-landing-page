/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['NeueMachina-Medium', 'sans-serif'],
        ultraBold: ['NeueMachina-Ultrabold'],
        ultraSemiBold: ['NeueMachina-Bold'],
        description: ['ApfelGrotezk-Regular', 'sans-serif'],
      },
      colors: {
        primary: '#CBFB45',
        secondary: '#f0f0f0',
        light: '#f3f3f3',
        lightGray: '#898990',
        dark: '#171616',
        gray: '#444544',
        card: '#232325',
        dark2: '#010001',
      },
      backgroundImage: {
        pattern: `url('/assets/imgs/home2.webp')`,
      },
    },
  },
  plugins: [],
}
