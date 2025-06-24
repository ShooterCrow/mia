// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "foundationgreennormal-active": "var(--foundationgreennormal-active)",
        "foundationredred-500": "var(--foundationredred-500)",
        "primitive-color-brand-white": "var(--primitive-color-brand-white)",
        "primitive-color-neutral-neutral-dark": "var(--primitive-color-neutral-neutral-dark)",
        "primitive-color-neutral-neutral-darker": "var(--primitive-color-neutral-neutral-darker)",
        "primitive-color-neutral-neutral-light": "var(--primitive-color-neutral-neutral-light)",
        "primitive-color-neutral-neutral-lighter": "var(--primitive-color-neutral-neutral-lighter)",
        "primitive-color-neutral-white": "var(--primitive-color-neutral-white)",

        dark: {
          100: "#111827",
          200: "#1f2937",
          300: "#374151",
          400: "#4b5563",
          500: "#1f2937",
          600: "#374151",
          700: "#1f2937",
          800: "#111827",
          900: "#0f172a",
        },

        green: {
          600: "#008774",
          700: "#008774",
        },
      },
      fontFamily: {
        "UPAM-big-body-text": "var(--UPAM-big-body-text-font-family)",
        "upam-small-body-text": "var(--upam-small-body-text-font-family)",
      },
    },
  },
  plugins: [],
};
