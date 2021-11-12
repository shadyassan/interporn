import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: base;
  overflow: hidden;
  line-height: 1;
  transition: width 0.25s ease;
  width: ${(props) =>
    props.mobileView ? '20px' : props.toggle ? '250px' : '20px'};

  @media (max-width: 576px) {
    display: none;
  }
`;

export const StyledInput = styled.input(
  css({
    fontSize: 'base',
    color: 'text.regular',
    backgroundColor: 'inherit',
  }),
  {
    width: '100%',
    border: 0,

    '&:focus': {
      outline: 0,
    },

    '&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder':
      {
        fontSize: 'base',
        color: 'text.regular',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
  }
);

export const StyledSearchButton = styled.div(
  css({
    color: 'text.medium',
    transition: themeGet('customs.transition'),

    ':hover': {
      color: 'white',
    },
  }),
  {
    cursor: 'pointer',
    lineHeight: 0,
    transition: themeGet('customs.transition'),
  }
);
