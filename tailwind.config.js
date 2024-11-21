/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    ({ addUtilities }) => {
      addUtilities({
        ".limit-text-2": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
        },
        ".limit-text-3": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
        },
      });
    },
  ],
};
