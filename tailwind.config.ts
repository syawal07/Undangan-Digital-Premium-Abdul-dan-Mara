// FILE: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          blue: "#005f99",
          dark: "#0a2a4a",
        }
      },
      fontFamily: {
        wedding: ['var(--font-wedding)'],
        sans: ['var(--font-body)'],
      },
      // --- TAMBAHAN ANIMASI DISINI ---
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 10s linear infinite', // Untuk bunga
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;