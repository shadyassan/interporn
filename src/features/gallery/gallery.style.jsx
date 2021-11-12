import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { GUTTERS } from 'utils/constant';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-column-gap: ${({ horizontal }) => (horizontal ? '45px' : '210px')};
  grid-row-gap: ${({ horizontal }) => (horizontal ? '45px' : 0)};
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 45px;
  }

  @media (max-width: 991px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const getBorder = (props) => {
  let styles = { left: 'auto', bottom: 'auto', top: 'auto', right: 'auto' };

  if (!props.horizontal) {
    switch (props.idx) {
      case 1:
        styles = { ...styles, bottom: 0, right: 0 };
        break;
      case 2:
        styles = { ...styles, top: 0, right: 0 };
        break;
      case 3:
        styles = { ...styles, bottom: 0, left: 0 };
        break;
      case 4:
        styles = { ...styles, top: 0, right: 0 };
        break;
    }
  } else {
    switch (props.idx) {
      case 1:
        styles = { ...styles, bottom: '-30px', left: '-30px' };
        break;
      case 2:
        styles = { ...styles, top: '-20px', left: '-30px' };
        break;
      case 3:
        styles = { ...styles, bottom: '-45px', right: '-30px' };
        break;
      case 4:
        styles = { ...styles, top: '-30px', left: '-30px' };
        break;
    }
  }

  return `:after {
    position: absolute;
    z-index: 5;
    display: block;
    bottom: ${styles['bottom']};
    left: ${styles['left']};
    top: ${styles['top']};
    right: ${styles['right']};
    width: 400px;
    height: 2px;
    background-color: ${props.theme.colors.primary.alternate};
    content: "";
  }`;
};

const getOverlay = (props) => {
  let styles = {
    left: 'auto',
    bottom: 'auto',
    top: 'auto',
    right: 'auto',
    zIndex: 'auto',
    width: '315px',
    height: '150px',
    display: 'block',
  };

  if (!props.horizontal) {
    switch (props.idx) {
      case 1:
        styles = { ...styles, top: 0, height: '100%', width: '100%' };
        break;
      case 2:
        styles = { ...styles, bottom: 0, height: '45%', width: '100%' };
        break;
      case 3:
        styles = { ...styles, display: 'none' };
      case 4:
        styles = {
          ...styles,
          top: '33.33333%',
          height: '33.33333%',
          width: '100%',
        };
        break;
    }
  } else {
    switch (props.idx) {
      case 1:
        styles = { ...styles, bottom: 0, left: '-120px', zIndex: -1 };
        break;
      case 2:
        styles = { ...styles, bottom: '-75px', left: 0, zIndex: -1 };
        break;
      case 3:
        styles = { ...styles, display: 'none' };
      case 4:
        styles = { ...styles, right: 0, bottom: 0, zIndex: 0 };
        break;
    }
  }

  return `
    bottom: ${styles['bottom']};
    left: ${styles['left']};
    top: ${styles['top']};
    right: ${styles['right']}; 
    z-index: ${styles['zIndex']};
    width: ${styles['width']};
    height: ${styles['height']};
    display: ${styles['display']};
  `;
};

const getColumnRow = (props) => {
  let styles = {
    gridColumn: 'auto',
    gridRow: 'auto',
    marginTop: 0,
    marginBottom: 0,
    transform: 'none',
    zIndex: 1,
  };

  if (!props.horizontal) {
    switch (props.idx) {
      case 1:
        styles = {
          ...styles,
          gridColumn: 2,
          gridRow: 1,
          transform: 'translate(-80px, 0)',
        };
        break;
      case 2:
        styles = { ...styles, gridColumn: 1, gridRow: 2, marginTop: '-65px' };
        break;
      case 3:
        styles = {
          ...styles,
          gridColumn: 2,
          gridRow: 2,
          marginTop: '-65px',
          transform: 'translate(0, 0)',
        };
        break;
      case 4:
        styles = {
          ...styles,
          gridColumn: 3,
          gridRow: 2,
          marginTop: '-65px',
          transform: 'translate(0, -50px)',
        };
        break;
    }
  } else {
    switch (props.idx) {
      case 1:
        styles = { ...styles, gridColumn: 2, gridRow: 1 };
        break;
      case 2:
        styles = { ...styles, gridColumn: 1, gridRow: 2, marginBottom: '75px' };
        break;
      case 3:
        styles = { ...styles, gridColumn: 2, gridRow: 2 };
        break;
      case 4:
        styles = {
          ...styles,
          gridColumn: 3,
          gridRow: 2,
          transform: 'translate(45px, -100px)',
        };
        break;
    }
  }

  return `
    grid-column: ${styles.gridColumn};
    grid-row: ${styles.gridRow};
    margin-top: ${styles.marginTop};
    margin-bottom: ${styles.marginBottom};
    transform: ${styles.transform};
    z-index: ${styles.zIndex};
  `;
};

export const VideoInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  padding: 30px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.85) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.45s ease;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 20px;
    opacity: 1;
  }
`;

export const VideoTitle = styled.h4`
  transition-delay: 0.25s;
  font-size: ${themeGet('fontSizes.xl')}px;

  &:not(:last-child) {
    margin-bottom: ${GUTTERS[1]}px;
  }

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const VideoParagraph = styled.p`
  transition-delay: 0.35s;
`;

export const GalleryInner = styled.div`
  position: relative;

  ${VideoTitle},
  ${VideoParagraph} {
    transition-duration: 0.25s;
    transition-property: opacity, transform;
    opacity: 0;
    transform: translateY(10px);

    @media (max-width: 991px) {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    ${VideoInfo} {
      opacity: 1;
      transform: translateY(0);
    }

    ${VideoTitle},
    ${VideoParagraph} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Overflow = styled.div`
  overflow: hidden;
`;

export const OverlayBlock = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  background: rgba(209, 17, 23, 0.3);
`;

export const GalleryItem = styled.div`
  @media (min-width: 1280px) {
    ${(props) => props.idx && getColumnRow(props)}

    &.section-with-title {
      grid-column: 1;
      grid-row: 1;
      align-self: flex-end;
    }

    &.section-with-heading {
      grid-column: 3;
      grid-row: 1;
    }
  }

  ${GalleryInner} {
    ${(props) => props.idx && getBorder(props)}

    @media (max-width: 1279px) {
      &:after {
        display: none;
      }
    }

    ${OverlayBlock} {
      ${(props) => props.idx && getOverlay(props)}

      @media (max-width: 1279px) {
        display: none;
      }
    }
  }
`;
