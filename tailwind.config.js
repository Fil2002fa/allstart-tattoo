/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
     fontFamily: {
  bebas: ["Bebas Neue", "sans-serif"],
  overpass: ["Overpass Mono", "monospace"],
  metal: ["Metal Mania", "cursive"],
  "playfair-sc": ["Playfair Display SC", "serif"],
  playfair: ["Playfair Display", "serif"], // SOLO se lo usi davvero
},

    },
  },
  plugins: [],
};
