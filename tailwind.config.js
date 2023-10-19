/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        screens: {
            xsm:'375',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          },
        extend: {
            spacing: {
                18: '4.5rem',
                22: '6.5rem',
            },
        },
    },
    plugins: [],
}