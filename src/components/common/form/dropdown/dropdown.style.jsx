import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const DropdownWrapper = styled.div`
  min-width: 110px;
`;

export const Options = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-left: 15px;
  }

  &.open {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  left: auto;
  right: 0;
  top: calc(100% + 10px);
  display: block;
  padding: 10px 20px;
  backdrop-filter: blur(5px);
  border-radius: ${themeGet('radii.base')};
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 5px 0;
  transition: all 0.25s ease;
  font-weight: ${themeGet('fontWeights.regular')};
  color: ${themeGet('menu.color')};
  white-space: nowrap;
  font-size: ${themeGet('fontSizes.sm')}px;

  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Label = styled.span`
  font-size: ${themeGet('fontSizes.base')}px;
  font-weight: ${themeGet('fontWeights.regular')};
  color: ${themeGet('colors.text.default')};

  span {
    color: ${themeGet('colors.text.medium')};
  }
`;
