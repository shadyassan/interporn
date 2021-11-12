import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ItemImage = styled.div`
  position: relative;

  a {
    display: block;
    font-size: 0;
    line-height: 0;
  }
`;

export const ItemOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
  top: 0;
  left: 0;
  padding: 0;
  align-content: center;
  text-align: center;
  justify-content: center;
  pointer-events: none;
  transition: ${themeGet('customs.transition')};
  width: 100%;
  height: 100%;
  background-color: rgba(26, 29, 39, 0.6);

  &:after,
  &:before {
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: ease;
    transition-duration: 0.4s;
    background-color: ${themeGet('colors.primary.alternate')};
    content: '';
  }

  &:after {
    bottom: 0;
  }

  &:before {
    top: 0;
  }
`;

export const ItemOverlayHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 28px 35px 60px;
  align-items: center;
  background-color: transparent;
  transition: ${themeGet('customs.transition')};
`;

const margins = [0, 40, 80, 120, 80, 40];

const makeRepeated = (arr, repeats) =>
  Array.from({ length: repeats }, () => arr).flat();

const marginChange = (index) => {
  const value = makeRepeated(margins, 5);
  return `margin-top: ${value[index]}px;`;
};

export const CarouselItemSlide = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;

  ${({ index }) => index >= 0 && marginChange(index)}

  @media (max-width: 1280px) {
    margin-top: 0;
  }

  &:hover {
    ${ItemOverlay} {
      background-color: transparent;

      &:after,
      &:before {
        opacity: 1;
      }

      ${ItemOverlayHolder} {
        background-color: rgba(209, 17, 23, 0.5);
      }
    }
  }
`;

export const ItemName = styled.h4`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: ${themeGet('fontSizes.1xl')}px;
  color: ${themeGet('colors.white')};

  &:after {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: #fff;
    content: '';
  }
`;
