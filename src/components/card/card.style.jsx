import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 4;
  width: 100%;
  height: auto;
  opacity: 0;
  visibility: hidden;
  padding: 30px 25px;
  text-align: left;
  pointer-events: none;
  background: #11131b;
  box-shadow: ${(props) => props.theme.shadows.card};
  transition: opacity 0s ease, box-shadow 0.2s ease;

  .title,
  .desc,
  .action-button {
    opacity: 0;
    transition-property: opacity, transform;
    transition-duration: 0.15s, 0.25s;
    transform: translateY(-10px);
  }

  .title {
    transition-delay: 0.1s;
  }

  .desc {
    transition-delay: 0.2s;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const Actions = styled.div`
  > .action-button {
    &:nth-child(1) {
      transition-delay: 0.3s;
    }

    &:nth-child(2) {
      transition-delay: 0.4s;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const VideoInfo = styled.div`
  position: relative;
  padding-top: 30px;
`;

export const CardWrapper = styled.div`
  position: relative;

  .title {
    font-size: ${(props) => props.theme.fontSizes.lg}px;

    a {
      color: ${(props) => props.theme.colors.white};

      &:hover {
        color: ${(props) => props.theme.colors.primary.alternate};
      }
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &.active {
    ${Overlay} {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transition: opacity 0.3s ease;

      .title,
      .desc,
      .action-button {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
