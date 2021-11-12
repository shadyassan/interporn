import { useState } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import {
  compose,
  layout,
  background,
  space,
  color,
  border,
} from 'styled-system';

import { getStyleString } from 'utils';

import EyeOffIcon from 'components/icons/EyeOffIcon';
import EyeIcon from 'components/icons/EyeIcon';

const columnsGap = {
  1: 25,
  3: 90,
};

const rowsGap = {
  1: 25,
  3: 50,
};

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: grid;

  ${({ columns }) =>
    columns && `grid-template-columns: repeat(${columns}, 1fr)`};

  ${({ columnGap }) =>
    columnGap &&
    getStyleString(columnsGap[columnGap], 'grid-column-gap', 'px')};
  ${({ rowGap }) =>
    rowGap && getStyleString(rowsGap[rowGap], 'grid-row-gap', 'px')};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const FormField = styled.div`
  position: relative;
`;

const cssFields = (props) => ({
  display: 'block',
  width: '100%',
  p: '5px 0',
  mb: '10px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: 'none',
  borderRadius: 0,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: props.error ? 'primary.alternate' : 'text.medium',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: 'text.medium',
  opacity: props.readonly ? '.5' : 1,
  pointerEvents: props.readonly ? 'none' : 'auto',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: 'text.medium',
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

export const Input = styled.input(
  (props) => css(cssFields(props)),
  compose(layout, background, space, color, border)
);

export const LabelEye = styled.label`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.text.medium};
  transition: color 0.25s ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const PasswordInput = ({ ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <FormField>
      <Input type={show ? 'text' : 'password'} id={rest.name} {...rest} />
      <LabelEye onClick={() => setShow((p) => !p)} htmlFor={rest.name}>
        {show ? <EyeOffIcon /> : <EyeIcon />}
      </LabelEye>
    </FormField>
  );
};

const TextareaElement = styled.textarea(
  (props) =>
    css({
      overflow: 'hidden',
      minWidth: '100%',
      maxWidth: '100%',
      maxHeight: props.maxHeight ?? 150,
      resize: 'none',
      boxSizing: 'border-box',
    }),
  (props) => css(cssFields(props)),
  compose(layout, background, space, color, border)
);

export const Textarea = (props) => {
  const elHeight = 34;
  const maxHeight = 150;
  const [height, setHeight] = useState(elHeight);

  const handleChange = (e) => {
    e.target.style.height = '34px';
    e.target.style.height = e.target.scrollHeight + 'px';
    setHeight(e.target.scrollHeight);
    props.onChange(e);
  };

  return (
    <TextareaElement
      {...props}
      maxHeight={maxHeight}
      style={{ height, overflow: height > maxHeight ? 'auto' : 'hidden' }}
      onChange={handleChange}
    />
  );
};

export const LabelError = styled.label`
  position: absolute;
  left: 0;
  font-size: ${(props) => props.theme.fontSizes['xm']}px;
  color: ${(props) => props.theme.colors.primary.alternate};
`;
