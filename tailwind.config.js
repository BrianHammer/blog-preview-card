

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      main: ["Figtree"]
    },
    extend: {
      boxShadow: {
        "card": "10px 10px 0 hsl(0, 0%, 7%)"
      }
    },
    colors: {
      "primary": "hsl(47, 88%, 63%)",

      "white": "hsl(0, 0%, 100%)",
      "grey": "hsl(0, 0%, 50%)",
      "black": "hsl(0, 0%, 7%)"
    }
  },
  plugins: [],
}

