/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ ye line important hai
  ],
  theme: {
    extend: {
      fontFamily: {
        google: ["Google Sans Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
}
