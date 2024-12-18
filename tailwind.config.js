// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firma: 'AlexBrush', //super cursiva
        cursiva: ['Playwrite MX'],
        display: ['LXGW WenKai TC'],
        revista: ['Playfair Display'],
        maquina: 'SpecialElite'
      },
      colors: {
        foto: {
          50: "#transparent", //trasparente
          100: "#c29e9b", //rosa oscuro
          200: "#F1F0E8", //blanco roto
          300: "#EEE0C9", //beige
          400: "#ADC4CE", //azul claro
          500: "#96B6C5", //azul más intenso
          600: "#96B6C5bf", //500 transparente
          700: "#f1dede", //rosa claro
          800: "#907a5f", //marron
          900: "#646f66", //verde
        },
        nani: {
          50: "#c7c7c7", //gris muy claro
          100: "#EDEDF9", //morado tirando a blanco
          200: "#907a5fbf" //marron transparente
        },
      },
    },
  },
  plugins: [],
});