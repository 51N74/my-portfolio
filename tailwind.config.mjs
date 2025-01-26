/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      pulse: 'pulse 3s infinite',
      'pulse-slow': 'pulse 5s infinite',
      'pulse-fast': 'pulse 1.5s infinite',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
