import { OverlayWrapper, Overlay, ImageContainer } from './overlay-image.style';

const OverlayImage = ({ background, opacity }) => {
  return (
    <OverlayWrapper>
      <ImageContainer {...background} />
      <Overlay opacity={opacity} />
    </OverlayWrapper>
  );
};

export default OverlayImage;
