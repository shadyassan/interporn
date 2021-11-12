import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PopoverWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &.active {
    .popover-drop-icon {
      transform: rotate(180deg);
    }
  }

  svg,
  svg path {
    transition: all 0.25s ease;
  }

  &:hover,
  &.active {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  .popover-handler {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.menu.color};

    .popover-drop-icon {
      margin-left: 18px;
    }
  }

  .popover-content {
    position: absolute;
    left: 0px;
    top: calc(100% + 10px);
    display: block;
    min-width: 120px;
    padding: 10px 20px;
    backdrop-filter: blur(5px);
    border-radius: ${themeGet('radii.base')};
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
  }

  &.right {
    .popover-content {
      left: auto;
      right: 0;
    }
  }
`;

export default PopoverWrapper;
