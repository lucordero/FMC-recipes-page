// const colors = require('tailwindcss/colors')

module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
    theme: {
        extend: {
            screens: {
                xsm: '420px',
            },
            fontFamily: {
                Outfit: ['Outfit', 'system-ui'],
                YoungSerif: ['"Young\\ Serif"', 'system-ui'],
            },
            colors: {
                Nutmeg: 'hsl(14, 45%, 36%)',
                DarkRaspberry: 'hsl(332, 51%, 32%)',
                White: 'hsl(0, 0%, 100%)',
                RoseWhite: 'hsl(330, 100%, 98%)',
                Eggshell: 'hsl(30, 54%, 90%)',
                LightGrey: 'hsl(30, 18%, 87%)',
                WengeBrown: 'hsl(30, 10%, 34%)',
                DarkCharcoal: 'hsl(24, 5%, 18%)',
            },
        },
    },
    plugins: [],
}
