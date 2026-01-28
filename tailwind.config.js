/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], 
      },
      colors: {
        primary: "#1E40AF",  
        secondary: "#F59E0B", 
        background: "#F9FAFB",
      },
    },
  },
  plugins: [],
}
