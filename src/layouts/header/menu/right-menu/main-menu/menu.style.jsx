import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MenuBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 12px 40px;
  cursor: pointer;
  text-transform: uppercase;
  transition: ${themeGet('customs.transition')};
  line-height: 1;

  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.sm')}px;
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('menu.color')};

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &.current-page,
  &:hover {
    color: ${themeGet('menu.hover')};
  }
`;
