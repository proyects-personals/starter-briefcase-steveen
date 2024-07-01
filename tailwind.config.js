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
                    primaryContent: '#000416',
                    secondary: '#00c6e4',
                    secondaryContent: '#000e12',
                    accent: '#008dff',
                    accentContent: '#000716',
                    neutral: '#0f130f',
                    neutralContent: '#c8c9c8',
                    base100: '#1e2226',
                    base200: '#191c20 ',
                    base300: '#131619',
                    baseContent: '# cdcecf ',
                    info: '#00cbe1',
                    infoContent: '#000f12',
                    success: '#00f9b4',
                    successContent: '#00150c',
                    warning: '#cea400',
                    warningContent: '#0f0a00',
                    error: '#ff948f',
                    errorContent: '#160807'
                },
                light: {
                    DEFAULT: '#D0D2E0',
                    text: '#333333',
                    primary: "#FFF7FF",
                    primaryContent: "#cde0ff",
                    secondary: "#b59b00",
                    secondaryContent: "#0c0900",
                    accent: "#009200",
                    accentContent: "#000800",
                    neutral: "#02140d",
                    neutralContent: "#c5cac8",
                    base100: "#fffaff",
                    base200: "#ded9de",
                    base300: "#bebabe",
                    baseContent: "#161516",
                    info: "#47cfff",
                    infoContent: "#021016",
                    success: "#00a583",
                    successContent: "#000a06",
                    warning: "#ff9c00",
                    warningContent: "#160900",
                    error: "#ff1944",
                    errorContent: "#160002"
                },
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
}