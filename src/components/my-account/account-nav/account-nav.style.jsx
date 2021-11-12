import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AccountNavWrapper = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const NavLink = styled.a`
  cursor: pointer;
  color: ${({ active }) =>
    active ? themeGet('colors.white') : themeGet('menu.color')};
  font-size: ${themeGet('fontSizes.up')}px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
