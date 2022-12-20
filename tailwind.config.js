/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-gray': '#ccc',
        'border-gray': '#aaa',
        'gray-100': '#FCFCFC',
        'black': '#000',
        'white': '#fff',
        'pink': '#db8ee7',
        'pink-light': '#f9cbd5',
        'pink-bright': '#D24ECD',
        'dark-pink': '#C39CA5',
        'background': 'linear-gradient(180deg,#c273ed 0%,#f1a6e2 78.96%,#feb4df 100%)',
        'yellow': '#F9ECB7',
        'blue': '#328ADB'
      },
      lineHeight: {
        'snug': '140%'
      },
      maxWidth: {
        'container': '1440px',
      },
      minHeight: {
        'page': 'calc(100vh - 73px)'
      },
      height: {
        'page': 'calc(100vh - 73px)',
        'full-screen': 'calc(100vh - 61px)',
        'full-screen-mob': 'calc(100vh - 56px)',
        'full-screen-container': 'calc(100vh - 117px)',
        'full-screen-container-mob': 'calc(100% - 95px)',
        'full-screen-container-mob-sm': 'calc(100% - 40px)',
        'window-content': 'calc(100% - 25px)',
        'window-content-mob': 'calc(100% - 60px)',
        'window-restored': 'calc(100% - 31px)',
        'window-restored-sm': 'calc(100% - 33px)',
        'file-content': 'calc(100% - 33px)'
      },
      fontFamily: {
        'sans': ['VT323', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['W95FA', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['"Press Start 2P"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'sm': 'inset -2px -2px 0px #000000, inset 2px 2px 0px #FFFFFF, inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4)',
        'sm-hovered': 'inset 0 0 0 #000000, inset 2px 2px 0px #ffffff,inset -2px -2px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4)',
        'lg': 'inset -2px -2px 0px #FFFFFF, inset 2px 2px 0px #000000, inset -4px -4px 0px #BDBDBD, inset 4px 4px 0px rgba(0, 0, 0, 0.4)',
        'lg-hovered': 'inset -2px -2px 0px #FFFFFF, inset 2px 2px 0px #000000, inset -4px -4px 0px #BDBDBD, inset 4px 4px 0px rgba(0, 0, 0, 0.4)',
        'xl-hovered': 'inset -2px -2px 0px #FFFFFF, inset 2px 2px 0px rgba(0, 0, 0, 0.4), inset -4px -4px 0px #BDBDBD'
        
      },
      spacing: {
        '25': '100px'
      }
    },
  },
  plugins: [],
}
