/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF", // iOS blue
        secondary: "#5856D6", // iOS purple
        accent: "#34C759", // iOS green
        dark: "#1C1C1E", // iOS dark mode background
        light: "#F2F2F7", // iOS light mode background
        success: "#34C759", // iOS green
        warning: "#FF9500", // iOS orange
        error: "#FF3B30", // iOS red
        gray: {
          100: "#F2F2F7",
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#C7C7CC",
          500: "#AEAEB2",
          600: "#8E8E93",
          700: "#636366",
          800: "#48484A",
          900: "#3A3A3C",
        },
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["SF Mono", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
