/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F7D5B",
        primaryDark: "#256547",
        softgreen: "#E8F4ED",
        warmyellow: "#F6C85F",
        cream: "#FFF9F0",
        coral: "#F28C70",
        ink: "#24332B",
        muted: "#68756E"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(36,51,43,0.08)",
        lift: "0 16px 40px rgba(36,51,43,0.14)"
      }
    }
  },
  plugins: []
};
