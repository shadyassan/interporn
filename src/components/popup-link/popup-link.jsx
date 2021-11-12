import React from 'react';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import { PopupLinkWrapper } from './popup-link.style';
import PlayBigIcon from 'components/icons/PlayBigIcon';
import { ImgWrapper, VideoLink } from 'assets/styles/pages.style';

const PopupLink = ({ handler, image, name, width, height }) => {
  return (
    <PopupLinkWrapper onClick={handler}>
      <ImgWrapper>
        <ImageWrapper src={image} name={name} width={width} height={height} />
        <VideoLink>
          <PlayBigIcon color="#fff" />
        </VideoLink>
      </ImgWrapper>
    </PopupLinkWrapper>
  );
};

export default PopupLink;
