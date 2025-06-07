/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#16191D',
                    text: '#ffffff',
                    primary: '#15202B',
                    secondary: '#0e1419',
                },
                light: {
                    DEFAULT: '#D0D2E0',
                    text: '#333333',
                    primary: "#F2F4F7",
                    secondary: "#b59b00"
                },
            },
          fontFamily: {
            sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          },
        },
    },
    plugins: [
        require('daisyui'),
    ],
}