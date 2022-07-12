module.exports = {
    content: [
        './configurator/**/*.html',
        './configurator/js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#AF5AC4',
                secondary: '#74EEFF',
                blue: {
                    DEFAULT: '#898CDA',
                    500: '#898CDA',
                },
                cyan: {
                    DEFAULT: '#74EEFF',
                    500: '#74EEFF',
                },
                violet: {
                    DEFAULT: '#AF5AC4',
                    50: '#FFF4FF',
                    100: '#FBEAFF',
                    200: '#F7D6FF',
                    300: '#E9AAF8',
                    500: '#AF5AC4',
                    700: '#5C2A74',
                    900: '#2F014B',
                },
                gray: {
                    DEFAULT: '#F1F2F7',
                    50: '#FBFBFE',
                    100: '#F1F2F7',
                    200: '#D7D7E2',
                    300: '#B1B2C1',
                    500: '#86879C',
                    700: '#52536D',
                    900: '#1B1C3B',
                },
            },
            fontFamily: {
                sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'Roboto', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwindcss/plugin')(
            ({ addBase }) => addBase({
                '[x-cloak]': { display: 'none !important' },
            })
        ),
    ],
}
