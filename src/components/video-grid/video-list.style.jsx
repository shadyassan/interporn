import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoHolder = styled.div`
  @media (min-width: 768px) {
    ${({ border }) =>
      border &&
      `border-left: 1px solid rgba(255, 255, 255, 0.2); padding-left: 40px;`}
  }
`;

export const VideoRow = styled.div((props) =>
  css({
    display: 'grid',
    gridGap: '40px',
    gridTemplateColumns: [
      `repeat(1, 1fr)`,
      `repeat(2, 1fr)`,
      `repeat(2, 1fr)`,
      `repeat(2, 1fr)`,
      `repeat(${props.columns}, 1fr)`,
    ],
    '@media (min-width: 576px) and (max-width: 767px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  })
);
