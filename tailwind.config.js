/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Ini mencakup semuanya di src/
  ],
  theme: {
    extend: {
      colors: {
        primary: '#425953',
      },
      fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
    },
  },
  plugins: [],
};
