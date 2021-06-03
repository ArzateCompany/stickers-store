// for it to work add in global styles in the html "font-size: 62.5%"
// example: html { font-size: 62.5%; }

// 10px = 1rem // 16px = 1.6rem
// percentages for responsive mackups of 1024 px

const responsive = {
  xs: '.222222222',
  md: '.533333333',
  lg: '.711111111',
  xl: '.888888889',
}
// sizes in min and max width - height

const sizes = {
  min: 'min-content',
  max: 'max-content',
  screen: '100vw',
  full: '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

// sizes in font-size and leanding

const fontSizes = {
  tiny: '.4rem',
  'tiny-xs': `calc(.4rem*${responsive.xs})`,
  'tiny-md': `calc(.4rem*${responsive.md})`,
  'tiny-lg': `calc(.4rem*${responsive.lg})`,
  'tiny-xl': `calc(.4rem*${responsive.xl})`,
  xs: '.80rem',
  'xs-xs': `calc(.8rem*${responsive.xs})`,
  'xs-md': `calc(.8rem*${responsive.md})`,
  'xs-lg': `calc(.8rem*${responsive.lg})`,
  'xs-xl': `calc(.8rem*${responsive.xl})`,
  sm: '1.2rem',
  'sm-xs': `calc(1.2rem*${responsive.xs})`,
  'sm-md': `calc(1.2rem*${responsive.md})`,
  'sm-lg': `calc(1.2rem*${responsive.lg})`,
  'sm-xl': `calc(1.2rem*${responsive.xl})`,
  md: '1.6rem',
  'md-xs': `calc(1.6rem*${responsive.xs})`,
  'md-md': `calc(1.6rem*${responsive.md})`,
  'md-lg': `calc(1.6rem*${responsive.lg})`,
  'md-xl': `calc(1.6rem*${responsive.xl})`,
  base: '2rem',
  'base-xs': `calc(2rem*${responsive.xs})`,
  'base-md': `calc(2rem*${responsive.md})`,
  'base-lg': `calc(2rem*${responsive.lg})`,
  'base-xl': `calc(2rem*${responsive.xl})`,
  lg: '2.4rem',
  'lg-xs': `calc(2.4rem*${responsive.xs})`,
  'lg-md': `calc(2.4rem*${responsive.md})`,
  'lg-lg': `calc(2.4rem*${responsive.lg})`,
  'lg-xl': `calc(2.4rem*${responsive.xl})`,
  xl: '2.8rem',
  'xl-xs': `calc(2.8rem*${responsive.xs})`,
  'xl-md': `calc(2.8rem*${responsive.md})`,
  'xl-lg': `calc(2.8rem*${responsive.lg})`,
  'xl-xl': `calc(2.8rem*${responsive.xl})`,
  '2xl': '3.2rem',
  '2xl-xs': `calc(3.2rem*${responsive.xs})`,
  '2xl-md': `calc(3.2rem*${responsive.md})`,
  '2xl-lg': `calc(3.2rem*${responsive.lg})`,
  '2xl-xl': `calc(3.2rem*${responsive.xl})`,
  '3xl': '3.6rem',
  '3xl-xs': `calc(3.6rem*${responsive.xs})`,
  '3xl-md': `calc(3.6rem*${responsive.md})`,
  '3xl-lg': `calc(3.6rem*${responsive.lg})`,
  '3xl-xl': `calc(3.6rem*${responsive.xl})`,
  '4xl': '4rem',
  '4xl-xs': `calc(4rem*${responsive.xs})`,
  '4xl-md': `calc(4rem*${responsive.md})`,
  '4xl-lg': `calc(4rem*${responsive.lg})`,
  '4xl-xl': `calc(4rem*${responsive.xl})`,
  '5xl': '4.4rem',
  '5xl-xs': `calc(4.4rem*${responsive.xs})`,
  '5xl-md': `calc(4.4rem*${responsive.md})`,
  '5xl-lg': `calc(4.4rem*${responsive.lg})`,
  '5xl-xl': `calc(4.4rem*${responsive.xl})`,
  '6xl': '4.8rem',
  '6xl-xs': `calc(4.8rem*${responsive.xs})`,
  '6xl-md': `calc(4.8rem*${responsive.md})`,
  '6xl-lg': `calc(4.8rem*${responsive.lg})`,
  '6xl-xl': `calc(4.8rem*${responsive.xl})`,
  '7xl': '5.2rem',
  '7xl-xs': `calc(5.2rem*${responsive.xs})`,
  '7xl-md': `calc(5.2rem*${responsive.md})`,
  '7xl-lg': `calc(5.2rem*${responsive.lg})`,
  '7xl-xl': `calc(5.2rem*${responsive.xl})`,
  '8xl': '5.6rem',
  '8xl-xs': `calc(5.6rem*${responsive.xs})`,
  '8xl-md': `calc(5.6rem*${responsive.md})`,
  '8xl-lg': `calc(5.6rem*${responsive.lg})`,
  '8xl-xl': `calc(5.6rem*${responsive.xl})`,
  '9xl': '6rem',
  '9xl-xs': `calc(6rem*${responsive.xs})`,
  '9xl-md': `calc(6rem*${responsive.md})`,
  '9xl-lg': `calc(6rem*${responsive.lg})`,
  '9xl-xl': `calc(6rem*${responsive.xl})`,
  '10xl': '6.4rem',
  '10xl-xs': `calc(6.4rem*${responsive.xs})`,
  '10xl-md': `calc(6.4rem*${responsive.md})`,
  '10xl-lg': `calc(6.4rem*${responsive.lg})`,
  '10xl-xl': `calc(6.4rem*${responsive.xl})`,
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        dark: '#070724',
        'grey-dark': '#38384F',
        'grey-light': '#838391',
        'blue-own': '#419EBB',
        'blue-dark': '#2d68f0',
        'yellow-own': '#EDA249',
        'purple-own': '#6f2ed6',
        'orange-own': '#CD5120',
        'orange-dark': '#D14C32',
        'red-own': '#D83A34',
        'green-own': '#1ec2a4',
      },
      screens: {
        xs: '320px',
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
      fontSize: fontSizes,
      lineHeight: fontSizes,
      spacing: {
        0.5: '.2rem',
        '0.5-xs': `calc(.2rem*${responsive.xs})`,
        '0.5-md': `calc(.2rem*${responsive.md})`,
        '0.5-lg': `calc(.2rem*${responsive.lg})`,
        '0.5-xl': `calc(.2rem*${responsive.xl})`,
        1: '.4rem',
        '1-xs': `calc(.4rem*${responsive.xs})`,
        '1-md': `calc(.4rem*${responsive.md})`,
        '1-lg': `calc(.4rem*${responsive.lg})`,
        '1-xl': `calc(.4rem*${responsive.xl})`,
        1.5: '.6rem',
        '1.5-xs': `calc(.6rem*${responsive.xs})`,
        '1.5-md': `calc(.6rem*${responsive.md})`,
        '1.5-lg': `calc(.6rem*${responsive.lg})`,
        '1.5-xl': `calc(.6rem*${responsive.xl})`,
        2: '.8rem',
        '2-xs': `calc(.8rem*${responsive.xs})`,
        '2-md': `calc(.8rem*${responsive.md})`,
        '2-lg': `calc(.8rem*${responsive.lg})`,
        '2-xl': `calc(.8rem*${responsive.xl})`,
        2.5: '1rem',
        '2.5-xs': `calc(1rem*${responsive.xs})`,
        '2.5-md': `calc(1rem*${responsive.md})`,
        '2.5-lg': `calc(1rem*${responsive.lg})`,
        '2.5-xl': `calc(1rem*${responsive.xl})`,
        3: '1.2rem',
        '3-xs': `calc(1.2rem*${responsive.xs})`,
        '3-md': `calc(1.2rem*${responsive.md})`,
        '3-lg': `calc(1.2rem*${responsive.lg})`,
        '3-xl': `calc(1.2rem*${responsive.xl})`,
        3.5: '1.4rem',
        '3.5-xs': `calc(1.4rem*${responsive.xs})`,
        '3.5-md': `calc(1.4rem*${responsive.md})`,
        '3.5-lg': `calc(1.4rem*${responsive.lg})`,
        '3.5-xl': `calc(1.4rem*${responsive.xl})`,
        4: '1.6rem',
        '4-xs': `calc(1.6rem*${responsive.xs})`,
        '4-md': `calc(1.6rem*${responsive.md})`,
        '4-lg': `calc(1.6rem*${responsive.lg})`,
        '4-xl': `calc(1.6rem*${responsive.xl})`,
        5: '2rem',
        '5-xs': `calc(2rem*${responsive.xs})`,
        '5-md': `calc(2rem*${responsive.md})`,
        '5-lg': `calc(2rem*${responsive.lg})`,
        '5-xl': `calc(2rem*${responsive.xl})`,
        6: '2.4rem',
        '6-xs': `calc(2.4rem*${responsive.xs})`,
        '6-md': `calc(2.4rem*${responsive.md})`,
        '6-lg': `calc(2.4rem*${responsive.lg})`,
        '6-xl': `calc(2.4rem*${responsive.xl})`,
        7: '2.8rem',
        '7-xs': `calc(2.8rem*${responsive.xs})`,
        '7-md': `calc(2.8rem*${responsive.md})`,
        '7-lg': `calc(2.8rem*${responsive.lg})`,
        '7-xl': `calc(2.8rem*${responsive.xl})`,
        8: '3.2rem',
        '8-xs': `calc(3.2rem*${responsive.xs})`,
        '8-md': `calc(3.2rem*${responsive.md})`,
        '8-lg': `calc(3.2rem*${responsive.lg})`,
        '8-xl': `calc(3.2rem*${responsive.xl})`,
        9: '3.6rem',
        '9-xs': `calc(3.6rem*${responsive.xs})`,
        '9-md': `calc(3.6rem*${responsive.md})`,
        '9-lg': `calc(3.6rem*${responsive.lg})`,
        '9-xl': `calc(3.6rem*${responsive.xl})`,
        10: '4rem',
        '10-xs': `calc(4rem*${responsive.xs})`,
        '10-md': `calc(4rem*${responsive.md})`,
        '10-lg': `calc(4rem*${responsive.lg})`,
        '10-xl': `calc(4rem*${responsive.xl})`,
        11: '4.4rem',
        '11-xs': `calc(4.4rem*${responsive.xs})`,
        '11-md': `calc(4.4rem*${responsive.md})`,
        '11-lg': `calc(4.4rem*${responsive.lg})`,
        '11-xl': `calc(4.4rem*${responsive.xl})`,
        12: '4.8rem',
        '12-xs': `calc(4.8rem*${responsive.xs})`,
        '12-md': `calc(4.8rem*${responsive.md})`,
        '12-lg': `calc(4.8rem*${responsive.lg})`,
        '12-xl': `calc(4.8rem*${responsive.xl})`,
        14: '5.6rem',
        '14-xs': `calc(5.6rem*${responsive.xs})`,
        '14-md': `calc(5.6rem*${responsive.md})`,
        '14-lg': `calc(5.6rem*${responsive.lg})`,
        '14-xl': `calc(5.6rem*${responsive.xl})`,
        16: '6.4rem',
        '16-xs': `calc(6.4rem*${responsive.xs})`,
        '16-md': `calc(6.4rem*${responsive.md})`,
        '16-lg': `calc(6.4rem*${responsive.lg})`,
        '16-xl': `calc(6.4rem*${responsive.xl})`,
        18: '7.2rem',
        '18-xs': `calc(7.2rem*${responsive.xs})`,
        '18-md': `calc(7.2rem*${responsive.md})`,
        '18-lg': `calc(7.2rem*${responsive.lg})`,
        '18-xl': `calc(7.2rem*${responsive.xl})`,
        20: '8rem',
        '20-xs': `calc(8rem*${responsive.xs})`,
        '20-md': `calc(8rem*${responsive.md})`,
        '20-lg': `calc(8rem*${responsive.lg})`,
        '20-xl': `calc(8rem*${responsive.xl})`,
        22: '8.8rem',
        '22-xs': `calc(8.8rem*${responsive.xs})`,
        '22-md': `calc(8.8rem*${responsive.md})`,
        '22-lg': `calc(8.8rem*${responsive.lg})`,
        '22-xl': `calc(8.8rem*${responsive.xl})`,
        24: '9.6rem',
        '24-xs': `calc(9.6rem*${responsive.xs})`,
        '24-md': `calc(9.6rem*${responsive.md})`,
        '24-lg': `calc(9.6rem*${responsive.lg})`,
        '24-xl': `calc(9.6rem*${responsive.xl})`,
        26: '10.4rem',
        '26-xs': `calc(10.4rem*${responsive.xs})`,
        '26-md': `calc(10.4rem*${responsive.md})`,
        '26-lg': `calc(10.4rem*${responsive.lg})`,
        '26-xl': `calc(10.4rem*${responsive.xl})`,
        28: '11.2rem',
        '28-xs': `calc(11.2rem*${responsive.xs})`,
        '28-md': `calc(11.2rem*${responsive.md})`,
        '28-lg': `calc(11.2rem*${responsive.lg})`,
        '28-xl': `calc(11.2rem*${responsive.xl})`,
        30: '12rem',
        '30-xs': `calc(12rem*${responsive.xs})`,
        '30-md': `calc(12rem*${responsive.md})`,
        '30-lg': `calc(12rem*${responsive.lg})`,
        '30-xl': `calc(12rem*${responsive.xl})`,
      },
      height: {
        ...sizes,
        screen: '100vh',
      },
      maxHeight: {
        ...sizes,
        screen: '100vh',
      },
      minHeight: {
        ...sizes,
        screen: '100vh',
      },
      width: sizes,
      maxWidth: sizes,
      minWidth: sizes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
