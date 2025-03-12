module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ✅ Make sure it scans Vue files
  ],
  theme: {
    extend: {
      colors: {
        bela: "#FEFFFE", // Dark Blue
        modernblack: "#131213", //
        secondary: "#3E5C76", // lighter blue
        terciary: "#748CAB", // mid blue
        highlight: "#131213", // sand
        richblack: "#0B1223", // lighter black
        background: "#F5F5F3", //light sand
        lahkozelena: "#F5F5F3", //light green
        logo: "#D9EAFE", //skillslidelogo
        zelena: "#0D2B1D",
        viola: "#1F1D36",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Default Fontz
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
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
};
