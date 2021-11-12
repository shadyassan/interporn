import Link from 'next/link';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import { CATALOG_PAGE } from 'site-settings/site-navigation';

import {
  CarouselItemSlide,
  ItemImage,
  ItemOverlay,
  ItemOverlayHolder,
  ItemName,
} from './carousel-item.style';

const CarouselItem = ({ index, item: { id, title, images } }) => {
  const { carousel_category } = images;
  if (!carousel_category) return null;
  return (
    <CarouselItemSlide index={index}>
      {carousel_category && (
        <ItemImage>
          <Link href={`${CATALOG_PAGE}/?category=${id}`} passHref>
            <a>
              <ImageWrapper
                name={title}
                src={carousel_category}
                width={335}
                height={645}
              />
            </a>
          </Link>
        </ItemImage>
      )}
      <ItemOverlay>
        <ItemOverlayHolder>
          <ItemName>{title}</ItemName>
        </ItemOverlayHolder>
      </ItemOverlay>
    </CarouselItemSlide>
  );
};

export default CarouselItem;
