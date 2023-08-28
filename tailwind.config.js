/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('/assets/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
