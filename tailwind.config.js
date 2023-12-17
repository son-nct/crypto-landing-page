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
        primary: '#cbfb45',
        secondary: '#f0f0f0',
        light: '#f3f3f3',
        lightGray: '#898990',
        dark: '#171616',
        dark2: '#111010',
        gray: '#444544',
        card: '#232325',
        dark2: '#111111',
        neutral: '#5D5D5D',
        neutralPink: '#BFBFBF',
        bgModal : '#525352' 
      },
      backgroundImage: {
        pattern: `url('/assets/imgs/home2.webp')`,
        footer: `url('/assets/imgs/footer.webp')`,
      },
      minHeight: {
        'slick-slide-custom': '80px',
        'custom-button': '60px',
      },
      minWidth: {
        'custom-button': '228px',
      },
    },
  },
  plugins: [],
}
