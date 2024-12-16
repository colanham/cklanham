/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('../public/images/noisy-texture.png')"
      },
    },
  },
  plugins: [],
}

