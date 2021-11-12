import styled from 'styled-components';
import { background } from 'styled-system';
import css from '@styled-system/css';

export const OverlayWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div(
  (props) =>
    css({
      backgroundSize: ['cover'],
      backgroundAttachment: props.backgroundAttachment
        ? props.backgroundAttachment
        : 'scroll',
    }),
  {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  background
);

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: ${(props) => props.opacity ?? '0.8'};
  width: inherit;
  height: inherit;
  content: '';
`;
