module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ✅ Make sure it scans Vue files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1223", // Dark Blue
        secondary: "#3E5C76", // lighter blue
        terciary: "#748CAB", // mid blue
        highlight: "#F0EBD8", // sand
        richblack: "#0B1223", // lighter black
        background: "#F5F5F3", //light sand
        lahkozelena: "#F5F5F3", //light green
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Default Font
        satoshi: ["Satoshi", "sans-serif"], // Default font
      },
      borderRadius: {
        xl: "1.5rem", // Custom large rounded corners
      },
      spacing: {
        '18': '4.5rem', // Custom spacing size
      },
    },
  },
  plugins: [],
};
