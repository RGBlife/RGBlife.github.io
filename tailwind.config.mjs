/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBackground: "#0a192f",
        lighterDarkBackground: "#56657b",
        // darkBackground: "#1B263B",
        darkPrimaryText: "#a8b2d1",
        darkSecondaryText: "#ccd6f6",
        darkAccent: "#FF6B6B",
        darkSecondaryBackground: "#233554",
        darkTertiaryBackground: "#8892b0",
        darkHighlight: "#e6f1ff",

        lightBackground: "#ccd6f6",
        lightPrimaryText: "#0a192f",
        lightSecondaryText: "#112240",
        lightAccentTeal: "#36C1B4",
        lightSecondaryBackground: "#e6f1ff",
        lightTertiaryBackground: "#8892b0",
        lightHighlight: "#233554",
      },
    },
  },
  plugins: [],
};
