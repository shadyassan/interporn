import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { settingsAlbumSlider } from 'site-settings/site-slider';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import LeftArrowIcon from 'components/icons/LeftArrowIcon';
import RightArrowIcon from 'components/icons/RightArrowIcon';

import ImageWrapper from 'components/image-wrapper/image-wrapper';
import { SwiperWrapper, SwiperHolder } from './gallery-carousel.style';

const Item = ({ url }) => {
  return <ImageWrapper name="album" src={url} width={720} height={415} />;
};

const GalleryCarousel = ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  if (data.length === 0) return null;

  return (
    <SwiperWrapper>
      <SwiperHolder>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            el: '.gallery-fractions',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return current + ' / ' + Number(total + 1);
            },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          {...settingsAlbumSlider}>
          {data.map((url, i) => (
            <SwiperSlide key={i}>
              <Item url={url} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={navigationPrevRef} className="swiper-btn-prev">
          <LeftArrowIcon width={30} height={40} />
        </div>
        <div ref={navigationNextRef} className="swiper-btn-next">
          <RightArrowIcon width={30} height={40} />
        </div>
      </SwiperHolder>
      <div className="gallery-fractions"></div>
    </SwiperWrapper>
  );
};

export default GalleryCarousel;
