// 項目の3 tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
  ],
  theme: {
      extend: {
        colors: {
          // 'カラー名': 'カラーコード'
          'green-bg': '#88B168',
          'bg-content': '#E1C292',
          'oriblue' : '#6FB3C1',
          'hovercol': '#4ca0b1',
        },
      },
  },
  plugins: [],
}