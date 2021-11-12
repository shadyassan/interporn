import styled from 'styled-components';
import css from '@styled-system/css';
import { getStyleString } from 'utils';
import { SPACER, GUTTERS } from 'utils/constant';

export const GridDefault = styled.div((props) =>
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridColumnGap: [30, 30, 30, 30, GUTTERS[props.gap]],
    gridRowGap: [30, 70, 60, 30, GUTTERS[props.gap]],
  })
);

export const Grid = styled(GridDefault)`
  ${({ mb }) => mb && getStyleString(GUTTERS[mb], 'margin-bottom', 'px')};
  ${({ align }) => align && getStyleString(align, 'align-items')};
`;

export const GridColumn = styled.div`
  @media (max-width: 1023px) {
    ${({ gridColumn }) =>
      gridColumn && getStyleString('span 12', 'grid-column')};
  }

  @media (min-width: 1024px) {
    ${({ gridColumn }) =>
      gridColumn && getStyleString(gridColumn, 'grid-column')};
  }

  /* @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  } */
`;
