import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

export const CountUpWrapper = styled.div((props) =>
  css({
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: [
      `repeat(1, 1fr)`,
      `repeat(2, 1fr)`,
      `repeat(2, 1fr)`,
      `repeat(3, 1fr)`,
      `repeat(${props.columns}, 1fr)`,
    ],
  })
);

export const CountUpItem = styled.div`
  .counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .counter-name {
      font-size: ${themeGet('fontSizes.xl')}px;
      line-height: 30px;
    }

    .counter-value {
      position: relative;
      font-size: 90px;
      line-height: 105px;
      font-family: ${themeGet('fonts.optional')};

      &:before {
        display: block;
        position: absolute;
        left: -70px;
        bottom: 40px;
        width: 40px;
        height: 2px;
        background-color: ${themeGet('colors.primary.alternate')};
        content: '';
      }
    }
  }
`;
