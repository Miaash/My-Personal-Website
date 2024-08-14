import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    // fontSize: {
    //   sm: ["8px", "14px"],
    //   base: ["16px", "24px"],
    //   lg: ["20px", "28px"],
    //   xl: ["24px", "32px"],
    // },
  },
  plugins: [],
};
export default config;
