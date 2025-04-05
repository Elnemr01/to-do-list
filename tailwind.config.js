/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        baseColor : "#8758ff",
        headerColor :"#fff",
        appCplor : "#1A1A40",
        placeHolderColor : "#ffffff4d",
        completedColor : "#c5aeff",
      }
    },
  },
  plugins: [],
}

