import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

export const SliderWrapper = styled.div`
  position: relative;
  display: block;

  .swiper {
    overflow: visible;
  }

  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0 !important;
  }
`;

export const OverlayTitle = styled.h4`
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.2xl')}px;
  font-family: ${themeGet('fonts.optional')};

  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.xl')}px;
  }
`;

export const OverlayWrapper = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .overlay-slide {
    position: absolute;
    z-index: 4;
    font-size: 0;
    box-shadow: 0 3px 14px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 767px) {
      grid-gap: 25px;
      position: static;
    }

    .overlay-flex {
      position: relative;
    }

    ${OverlayTitle} {
      position: absolute;
      z-index: 5;
      white-space: nowrap;

      @media (max-width: 767px) {
        position: static;
      }
    }

    &.overlaySlideImg-1 {
      top: -30px;
      right: 270px;

      .overlay-flex {
        &:before {
          position: absolute;
          z-index: 1;
          left: 0;
          width: 100%;
          height: 100%;
          bottom: 0;
          content: '';
          background: rgba(209, 17, 23, 0.5);

          @media (max-width: 767px) {
            display: none;
          }
        }
      }

      ${OverlayTitle} {
        left: 80%;
        top: -15px;
      }
    }

    &.overlaySlideImg-2 {
      bottom: -80px;
      right: 20px;

      ${OverlayTitle} {
        right: 90%;
        bottom: 20px;
      }
    }
  }
`;
