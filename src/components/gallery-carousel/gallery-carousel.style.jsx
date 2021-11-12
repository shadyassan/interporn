import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  .gallery-fractions {
    padding-top: 1.5rem;
    font-family: ${(props) => props.theme.fonts.optional};
    font-size: ${(props) => props.theme.fontSizes['4xl']}px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SwiperHolder = styled.div`
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

export const ItemWrap = styled.div`
  margin: 0;
`;
