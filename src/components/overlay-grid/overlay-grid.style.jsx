import styled from 'styled-components';

export const OverlayGridWrapper = styled.div`
  position: absolute;
  max-width: ${(props) => props.theme.sizes[0]}px;
  display: flex;
  justify-content: space-between;
  z-index: 0;
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  pointer-events: none;
`;

export const GridDivider = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  width: 1px;

  &:after {
    position: absolute;
    top: ${(props) =>
      props.value ? props.value : Math.random() * (90 - 10) + 10}%;
    right: -2px;
    width: 3px;
    height: 25px;
    background: rgba(255, 255, 255, 0.5);
    content: '';
  }
`;
