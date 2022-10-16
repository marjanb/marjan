module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      aspectRatio: {
        miniCart: '925 / 617',
      },
      maxWidth: {
        miniCart: '130px',
      }
    },
    fontFamily: {
      sans: ['DM Mono', 'sans-serif'],
      mono: ['DM Mono', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
