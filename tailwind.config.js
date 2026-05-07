/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f5ff',
                    100: '#e0ebff',
                    200: '#b8d4fe',
                    300: '#7db4fc',
                    400: '#4a94f8',
                    500: '#1a6ff5',
                    600: '#0d56d0',
                    700: '#0e42a8',
                    800: '#12388a',
                    900: '#153172',
                    950: '#0e1f4d',
                },
                surface: {
                    light: '#fafbfc',
                    DEFAULT: '#f5f6f8',
                    dark: '#e9ecef',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
}