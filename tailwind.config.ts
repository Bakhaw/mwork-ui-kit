import type { Config } from "tailwindcss";
import tailwindcssAnimatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "var(--secondary-hover)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
        },
        invert: "hsl(var(--invert))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      boxShadow: {
        "border-accent":
          "0px 0px 0px 1px rgba(228, 92, 1, 0.76), 0px 1px 2px 0px rgba(62, 61, 58, 0.4)",
        "border-secondary":
          "0px 0px 0px 1px rgba(81, 80, 75, 0.08), 0px 1px 2px 0px rgba(81, 77, 42, 0.12)",
        focus: "0px 0px 0px 4px var(--shadow-focus)",
      },
    },
  },
  plugins: [tailwindcssAnimatePlugin],
};

export default config;
