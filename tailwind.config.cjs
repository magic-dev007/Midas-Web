/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        "midas-gold": {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          deep: "#2563EB"
        }
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at center, rgba(148,163,184,0.3), transparent 60%)",
        "hero-grid-light":
          "radial-gradient(circle at top, rgba(59,130,246,0.15), transparent 55%), radial-gradient(circle at center, rgba(148,163,184,0.1), transparent 60%)"
      },
      boxShadow: {
        "glow-gold":
          "0 0 25px rgba(59,130,246,0.45), 0 0 60px rgba(59,130,246,0.25)"
      }
    }
  },
  plugins: []
};

