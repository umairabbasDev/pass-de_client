/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-blob": "url('http://localhost:5173/assets/yellow-blob.png')",
        "footer-blob": "url('http://localhost:5173/assets/pink-blob.png')",
      },
      colors: {
        arifPur: " #4F46E5",
        arifVoil: "#6B46C1",
      },
    },
  },
  plugins: [],
};
