import Link from 'next/link';
import Loader from 'components/loader/loader';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import PlayBigIcon from 'components/icons/PlayBigIcon';
import { GAME_PAGE } from 'site-settings/site-navigation';

import {
  GalleryWrapper,
  GalleryItem,
  GalleryInner,
  Overflow,
  OverlayBlock,
  VideoInfo,
  VideoTitle,
  VideoParagraph,
} from './gallery.style';

import {
  TitleHolder,
  Title,
  Paragraph,
  ImgWrapper,
} from 'assets/styles/pages.style';

const Gallery = ({
  data,
  isLoading,
  direction = 'horizontal',
  heading,
  description,
}) => {
  if (isLoading) return <Loader />;

  if (data.length === 0) return null;

  const horizontal = direction === 'horizontal';

  return (
    <GalleryWrapper horizontal={horizontal}>
      <GalleryItem horizontal={horizontal} className="section-with-heading">
        <TitleHolder direction="column" textAlign="right">
          {heading && <Title mb={2}>{heading}</Title>}
          {description && <Paragraph>{description}</Paragraph>}
        </TitleHolder>
      </GalleryItem>

      {data.map(({ id, title, small_text, featured_image }, idx) => {
        return (
          <GalleryItem
            key={id}
            idx={idx + 1}
            horizontal={horizontal}
            className={`item-${idx + 1}`}>
            <GalleryInner>
              <Overflow>
                <ImgWrapper>
                  <ImageWrapper
                    name={title}
                    src={featured_image}
                    width={horizontal ? 500 : 340}
                    height={horizontal ? 280 : 430}
                  />

                  <Link href={`${GAME_PAGE}/${id}`} passHref>
                    <VideoInfo horizontal={horizontal}>
                      {title && <VideoTitle>{title}</VideoTitle>}
                      {small_text && (
                        <VideoParagraph
                          dangerouslySetInnerHTML={{
                            __html: small_text,
                          }}
                        />
                      )}
                    </VideoInfo>
                  </Link>
                </ImgWrapper>
              </Overflow>
              <OverlayBlock />
            </GalleryInner>
          </GalleryItem>
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
