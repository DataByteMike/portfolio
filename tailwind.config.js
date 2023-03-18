/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      borderRadius: {
        windmill: '1.25em 1.25em 0 0',
        light: '0.25em 0.25em 0 0',
        window: '1.125em 1em',
        frontcar: '1.25em 1em'
      },
      boxShadow: {
        moon: '0 0 0 0.62em rgba(245, 251, 254, 0.6), 0 0 0 1.25em rgba(218, 234, 245, 0.5),  0 0 0 1.9em rgba(136, 140, 142, 0.4)',
        light: '0 0 0.06em 0.12em rgba(141, 175, 118, 0.3), 0 0 0.06em 0.25em rgba(141, 175, 118, 0.2)',
        mountainint: '0 0 0 50px #ac6b34, 60px 50px 0 70px #ac6b34, 90px 90px 0 50px #ac6b34, 250px 250px 0 50px #ac6b34, 290px 320px 0 50px #ac6b34, 320px 400px 0 50px #ac6b34',
        wind: '-24px 52px 0 1.5px #fff, -30px 44px 0 1.5px #fff'
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#0b0b0b',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b'
        },
        paragraph: '#878e99',
      },
      content: {
        about: "url('/text_img/about.svg')",
        technical: "url('/text_img/technical.svg')",
        portfolio: "url('/text_img/portfolio.svg')",
        contact: "url('/text_img/contact.svg')",
      },
      keyframes: {
        shootingstar: {
          '10%': { transform: 'rotate(-30deg) translate(-34em, 0)' },
          '100%': { transform: 'rotate(-30deg) translate(-34em, 0)'}
        },
        speed: {

        },
        twinkle: {
          '50%': { opacity: 1 }
        },
      }
    },
  },
  plugins: [],
}
