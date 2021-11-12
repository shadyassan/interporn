import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CardWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const CardTitle = styled.span`
  font-size: ${themeGet('fontSizes.xl')}px;
  color: ${themeGet('colors.white')};
  text-transform: capitalize;

  @media (max-width: 576px) {
    font-size: ${themeGet('fontSizes.up')}px;
  }
`;
