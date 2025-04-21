/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            600: "#4f46e5",
            400: "#818cf8", // Added for dark mode
          },
          gray: {
            900: "#111827", // Dark mode background
            800: "#1f2937", // Dark mode secondary
            700: "#374151", // Dark mode borders
            300: "#d1d5db", // Light mode text
            100: "#f3f4f6", // Light mode secondary
          },
        },
        transitionProperty: {
          'colors': 'background-color, border-color, color, fill, stroke',
        },
        transitionDuration: {
          '200': '200ms',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  };