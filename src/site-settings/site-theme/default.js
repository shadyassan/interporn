const baseColor = {
  white: '#fff',
  black: '#000',
  gray: {
    200: '#f7f7f7',
    500: '#f1f1f1',
    600: '#272931',
  },
  text: {
    default: '#cdcdcd',
    medium: '#757ea0',
    regular: '#fff',
    light: '#444549',
    disabled: '#68696f',
  },
  primary: {
    regular: '#c61218',
    hover: '#ef454a',
    alternate: '#d11117',
  },
  secondary: {
    regular: 'rgba(255, 255, 255, 0.3)',
    bg: 'rgba(68, 69, 73, 0.3)',
    hover: '#444549',
  },
};

export const defaultTheme = {
  colors: {
    ...baseColor,
    body: {
      bg: '#1a1d27',
      text: 'text.default',
    },
    linkColor: '#757ea0',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: '',
    },
  },
  menu: {
    color: '#757ea0',
    hover: '#fff',
  },
  breakpoints: ['767px', '991px', '1024px', '1280px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [1310, 1530, 1610, 1890],

  fontSizes: {
    xs: 12,
    xm: 13,
    sm: 14,
    base: 16,
    up: 18,
    md: 20,
    lg: 21,
    xl: 24,
    '1xl': 30,
    '2xl': 32,
    '2xlup': 36,
    '3xl': 38,
    '4xl': 48,
    '5xl': 58,
  },
  fontWeights: {
    regular: 400,
    body: 400,
    heading: 400,
    button: 400,
    light: 300 /* not */,
    medium: 500 /* not */,
    bold: 700,
  },
  fonts: {
    body: 'Gotham Pro, sans-serif',
    menu: 'Gotham Pro, sans-serif',
    heading: 'Gotham Pro, sans-serif',
    optional: 'Euphoria Script, cursive',
  },

  // Custom Theme keys
  customs: {
    transition: '0.25s ease-in-out',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: {
    base: '4px',
    small: '10px',
    medium: '30px',
    large: '40px',
    big: '50px',
  },
  shadows: {
    card: '0 1px 10px 2px rgb(0 0 0 / 15%)',
    modal: '0 5px 15px rgba(0, 0, 0, 0.05)',
  },
};
