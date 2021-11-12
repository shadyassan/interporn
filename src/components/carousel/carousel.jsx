import { useRef } from 'react';
import Link from 'next/link';
import Loader from 'components/loader/loader';
import CarouselItem from './carousel-item/carousel-item';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselSliderSettings } from 'site-settings/site-slider';
import { useCategoriesQuery } from '@framework/category/get-all-categories';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination]);

import LeftArrowIcon from 'components/icons/LeftArrowIcon';
import RightArrowIcon from 'components/icons/RightArrowIcon';

import { CATALOG_PAGE } from 'site-settings/site-navigation';
import { PaginationStyles } from 'assets/styles/pagination.style';
import { CarouselWrapper, CarouselSwiper, TitleHolder } from './carousel.style';

const CategoryCarousel = ({ limit = 10, title, viewAll = true }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const { data, isLoading } = useCategoriesQuery({ limit });

  if (isLoading) return <Loader />;

  if (data.length === 0) return null;

  return (
    <CarouselWrapper>
      <TitleHolder>
        {title && <h2 className="section-title">{title}</h2>}
        {viewAll && (
          <Link href={CATALOG_PAGE}>
            <a className="section-link">View all</a>
          </Link>
        )}
      </TitleHolder>

      <CarouselSwiper>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
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
          {...carouselSliderSettings}>
          {data.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <CarouselItem index={idx} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={navigationPrevRef} className="swiper-btn-prev">
          <LeftArrowIcon width={30} height={40} />
        </div>
        <div ref={navigationNextRef} className="swiper-btn-next">
          <RightArrowIcon width={30} height={40} />
        </div>
        <PaginationStyles className="custom-pag" />
      </CarouselSwiper>
    </CarouselWrapper>
  );
};

export default CategoryCarousel;
