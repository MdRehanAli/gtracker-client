/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // ✅ REQUIRED
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require("daisyui")],
}
