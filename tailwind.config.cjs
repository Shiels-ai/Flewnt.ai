module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Use a site-wide serif typeface
        serif: ["Source Serif 4", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        // Map existing aliases to the serif to ensure consistent typography
        lato: ["Source Serif 4", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        onest: ["Source Serif 4", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
