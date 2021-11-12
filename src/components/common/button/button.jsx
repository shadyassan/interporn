import { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import css from '@styled-system/css';
import { compose, variant, border, space, layout } from 'styled-system';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const StyledButton = styled.button(
  (props) =>
    css({
      width: props.fullwidth ? '100%' : 'auto',
      px: '40px',
      py: '15px',
      fontSize: ['sm'],
      fontWeight: 'button',
      alignSelf: props.alignSelf ? props.alignSelf : 'flex-start',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      color: props.disabled ? 'text.disabled' : 'white',
      bg: props.disabled ? 'gray.600' : 'primary.regular',
      transition: 'all 0.3s ease',
      borderRadius: 'base',
      lineHeight: 1,

      '&:hover': {
        color: props.disabled ? 'text.disabled' : 'white',
        bg: props.disabled ? 'gray.600' : 'primary.hover',
      },
    }),
  {
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'inherit',
    border: 0,

    '> svg': {
      marginRight: '10px',
    },

    '&:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        borderRadius: 'large',
        bg: 'primary.regular',
        '&:hover': {
          bg: 'primary.hover',
        },
      },
      secondary: {
        color: 'secondary.regular',
        bg: 'secondary.bg',
        '&:hover': {
          bg: 'secondary.hover',
        },
      },
      outlined: {
        color: 'primary.regular',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'primary.regular',

        '&:hover': {
          borderColor: 'primary.hover',
          color: 'primary.hover',
          bg: 'transparent',
        },
      },
    },
  }),
  variant({
    prop: 'radius',
    variants: {
      medium: {
        borderRadius: 'medium',
      },
      large: {
        borderRadius: 'large',
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        px: '21px',
        py: '12px',
        fontSize: 'sm',
      },
      medium: {
        px: '125px',
        py: '21px',
        fontSize: 'up',
      },
      big: {
        px: 30,
        py: '21px',
        width: '100%',
        fontSize: 'up',
      },
    },
  }),
  compose(border, space, layout)
);

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-top: 2px solid
    ${(props) => (props.color ? props.color : 'transparent')};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Button = forwardRef(
  ({ children, disabled, loading = false, ...props }, ref) => (
    <StyledButton ref={ref} {...props} disabled={disabled}>
      {children}
      {loading && <Spinner />}
    </StyledButton>
  )
);
