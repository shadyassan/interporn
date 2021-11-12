import { createGlobalStyle } from 'styled-components';
import { get } from 'styled-system';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 'base',
      lineHeight: 'body',
      overflowX: 'hidden',
      color: get(theme, 'colors.body.text'),
      backgroundColor: get(theme, 'colors.body.bg'),
    },
    'h1, h2, h3, h4, h5, h6': {
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'white',
    },
    h1: {
      fontFamily: 'heading',
      fontSize: '5xl',
      margin: 0,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: '4xl',
      margin: 0,
    },
    h3: {
      fontFamily: 'heading',
      fontSize: '3xl',
      margin: 0,
    },
    h4: {
      fontFamily: 'heading',
      fontSize: '2xl',
      margin: 0,
    },
    h5: {
      fontFamily: 'heading',
      fontSize: 'md',
      margin: 0,
    },
    h6: {
      fontFamily: 'heading',
      fontSize: 'base',
      margin: 0,
    },
    p: {
      fontSize: 'base',
      color: get(theme, 'colors.body.text'),
    },
    'p,span,button,li,div': {
      fontFamily: 'body',
      margin: 0,
    },
    a: {
      fontFamily: 'body',
      textDecoration: 'none',
      color: 'linkColor',
      transition: get(theme, 'customs.transition'),
      '&:hover': {
        color: 'white',
      },
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    'body.modal-open': {
      paddingRight: '16px',
    },
    '::-webkit-scrollbar': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: get(theme, 'colors.primary.alternate'),
      borderRadius: '10px',
      border: '5px solid transparent',
      backgroundClip: 'content-box',
    },
    'input[type=radio]': {
      padding: 0,
      margin: '0 12px 0 0',
      appearance: 'none',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: `1px solid ` + get(theme, 'colors.white'),

      ':checked': {
        backgroundColor: get(theme, 'colors.white'),
      },
    },
    '.quick-view-overlay': {
      backgroundColor: 'rgba(0,0,0,.7)',
    },
    '.swiper-btn-prev, .swiper-btn-next': {
      position: 'absolute',
      zIndex: 2,
      backgroundPosition: 'center',
      height: '100%',
      right: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      transition: 'all .25s ease-in-out',

      '&:hover': {
        color: 'secondary.alternate',
      },

      '&:after, &:before': {
        display: 'none',
      },

      '&.swiper-button-disabled': {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
    '.swiper-btn-prev': {
      left: 0,
      right: 'auto',
    },
    '.swiper-btn-next': {
      right: 0,
      left: 'auto',
      transform: 'translateY(-50%) rotate(180deg)',
    },
    '.react-responsive-modal-modal': {
      backgroundColor: '#000',
      padding: 0,
      margin: 0,
    },
    '.react-responsive-modal-closeButton': {
      backgroundColor: 'transparent',
      color: '#fff',
      top: '20px',
      right: '20px',
      zIndex: 20,

      svg: {
        fill: '#fff',
      },
    },
    '.react-player': {
      '&.fullHeight': {
        margin: '0 auto',
      },
    },
    '.drawer .drawer-content-wrapper': {
      width: '250px',
      backgroundColor: get(theme, 'colors.body.bg'),
    },
    '.site-img': {
      position: 'relative',
      fontSize: '0',

      '.divide-line': {
        position: 'absolute',
        zIndex: 5,
        top: '50%',
        left: '-25px',
        height: '4px',
        width: '50px',
        transform: 'translateY(-50%)',
        backgroundColor: get(theme, 'colors.primary.alternate'),

        '@media (max-width: 767px)': {
          display: 'none',
        },
      },
    },
  })
);
