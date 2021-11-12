import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CarouselWrapper = styled.div`
  display: block;

  @media (max-width: 768px) {
    max-width: 675px;
  }

  @media (max-width: 576px) {
    max-width: 510px;
  }

  @media (max-width: 420px) {
    max-width: 350px;
  }

  .gallery-fractions {
    padding-top: 1.5rem;
    font-family: ${(props) => props.theme.fonts.optional};
    font-size: ${(props) => props.theme.fontSizes['4xl']}px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const CarouselSwiper = styled.div`
  position: relative;

  .swiper-btn-prev,
  .swiper-btn-next {
    visibility: hidden;
    opacity: 0;
    padding: 20px;
  }

  .swiper-btn-prev {
    left: -70px;
    transform: translateX(-30px);
  }

  .swiper-btn-next {
    right: -70px;
    transform: translateX(30px);
  }

  &:hover {
    .swiper-btn-prev,
    .swiper-btn-next {
      visibility: visible;
      opacity: 1;
      transform: translate(0, 0);

      &.swiper-button-disabled {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;

export const TitleHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 35px;
  }

  .section-title {
    font-size: ${(props) => props.theme.fontSizes['4xl']}px;
    color: ${themeGet('colors.white')};
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: ${(props) => props.theme.fontSizes['xl']}px;
    }
  }

  .section-link {
    color: ${themeGet('colors.primary.alternate')};
    font-family: ${themeGet('fonts.optional')};
    font-size: ${themeGet('fontSizes.4xl')}px;
    transition: ${themeGet('customs.transition')};

    @media (max-width: 576px) {
      font-size: ${(props) => props.theme.fontSizes['2xl']}px;
    }

    &:hover {
      color: ${themeGet('colors.primary.hover')};
    }
  }
`;
