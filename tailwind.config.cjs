module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Roboto Mono', 'inter', 'serif'],
      },
      colors: {
        customColor: '#F3EFE9', // Add your custom color
      },
    },
  },
  plugins: [],
};
