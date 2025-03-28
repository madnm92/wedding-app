/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
      },
      colors: {
        primary: "#2a4d8f", // Azul cobalto (Títulos e botões)
        secondary: "#1e293b", // Azul escuro neutro (Textos)
        card: "#f5f7fa", // Branco suave (Seções e caixas)
        background: "#ffffff", // Branco puro (Fundo geral)
        accent: "#a2c1e2", // Azul claro (detalhes, hover)
      },
      backgroundImage: {
        decorative: "url('/wedding-app/images/azulejo.jpg')",
      },
    },
  },
  plugins: [],
};
