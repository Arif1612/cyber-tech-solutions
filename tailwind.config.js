/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-black": "#0C0C0C",
        "custom-gray": "#ADADAD",
        "custom-blue-gray": "#9398BF",
      },
    },
  },
  plugins: [require("daisyui")],
};
