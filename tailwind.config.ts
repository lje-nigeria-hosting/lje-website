import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: ["light"],
    },
    extend: {},
    fontFamily: {
      heading: ["--font-barlow"],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
