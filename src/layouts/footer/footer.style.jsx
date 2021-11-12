import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

export const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const FooterOverlay = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: color-dodge;
  background-image: url(${(props) => props.bgImage ?? ''});
  background-repeat: repeat;
`;

export const FooterRowDefault = styled.div((props) =>
  css({
    maxWidth: ['100%', props.theme.sizes[0]],
  })
);

export const FooterRow = styled(FooterRowDefault)`
  padding: 40px 30px 25px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: row wrap;
    flex-grow: 1;
  }

  @media (max-width: 575px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    justify-content: center;
    text-align: center;
  }
`;

export const FooterCol = styled.div`
  @media (min-width: 576px) {
    width: 33.333333%;
    padding: ${(props) => props.padding || 0};
  }

  .widget-wrapper {
    .widget-title {
      color: ${themeGet('color.white')};

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    .widget-list {
      li {
        a {
          font-size: ${themeGet('fontSizes.base')}px;
          color: ${themeGet('colors.text.medium')};
          transition: ${themeGet('customs.transition')};

          &:hover {
            color: ${themeGet('colors.white')};
          }
        }
      }
    }
  }

  &:nth-child(2) {
    .widget-wrapper {
      @media (min-width: 576px) {
        text-align: center;
      }

      .logo-box {
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }
  }

  &:last-child {
    .widget-wrapper {
      @media (min-width: 576px) {
        text-align: right;
      }
    }
  }
`;

export const SubTitle = styled.p`
  font-size: ${themeGet('fontSizes.sm')}px;
  color: ${themeGet('colors.text.medium')};
`;

export const Copyright = styled.div`
  padding: 12px;
  width: 100%;
  text-align: center;
  background-color: #2c3043;

  p {
    font-size: ${themeGet('fontSizes.xs')}px;
    color: ${themeGet('colors.text.medium')};
  }
`;
