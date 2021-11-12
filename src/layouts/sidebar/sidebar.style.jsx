import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SidebarWrapper = styled.aside`
  padding: 0;
`;

export const WidgetWrapper = styled.div`
  position: relative;
`;

export const WidgetList = styled.ul`
  list-style: none;
`;

export const WidgetListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.a`
  cursor: pointer;
  color: ${({ active }) =>
    active ? themeGet('colors.white') : themeGet('menu.color')};
  font-size: ${themeGet('fontSizes.up')}px;
`;
