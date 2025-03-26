/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
      },
      colors: {
        primary: "#6d1d1d", // Bordô/Vinho (Títulos e botões)
        secondary: "#8c5c3b", // Marrom suave (Textos)
        card: "#e8dfd1", // Bege claro (Seções e caixas)
      },
    },
  },
  plugins: [],
};
