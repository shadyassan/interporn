import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MobileMenuWrap = styled.div`
  padding: 30px;
  display: grid;
  grid-row-gap: 40px;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  color: ${(props) => props.theme.colors.white};
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 20px 40px;
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
