import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Grid, GridColumn } from 'assets/styles/framework.style';
import Loader from 'components/loader/loader';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import { useWindowSize } from 'utils/use-window-size';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Pagination } from 'swiper';

import { homeSliderSettings } from 'site-settings/site-slider';

import { useRandomGamesQuery } from '@framework/games/get-random-games';
import PlayBigIcon from 'components/icons/PlayBigIcon';
import { GAME_PAGE } from 'site-settings/site-navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

SwiperCore.use([EffectFade, Pagination]);

import {
  Heading,
  SubHeading,
  Paragraph,
  ImgWrapper,
  VideoLink,
} from 'assets/styles/pages.style';

import { PaginationStyles } from 'assets/styles/pagination.style';
import {
  SliderWrapper,
  OverlayWrapper,
  OverlayTitle,
} from './home-slider.style';

const filterPrevNext = (_, idx, prevIndex, nextIndex) =>
  idx === prevIndex || idx === nextIndex;

const HomeSlider = () => {
  const { data, isLoading } = useRandomGamesQuery({ limit: 5 });
  const [slides, setSlides] = useState(null);
  const { isMobile } = useWindowSize(767);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setSlides(
        data.filter((_, idx) => filterPrevNext(_, idx, data.length - 1, 1))
      );
    }
  }, [isLoading, data]);

  if (isLoading) return <Loader />;

  if (data.length === 0) return null;

  return (
    <SliderWrapper>
      <Swiper
        onSlideChange={(swiper) => {
          setSlides(
            data.filter((item, idx) =>
              filterPrevNext(
                item,
                idx,
                swiper.activeIndex === 0
                  ? data.length - 1
                  : swiper.activeIndex - 1,
                swiper.isEnd ? 0 : swiper.activeIndex + 1
              )
            )
          );
        }}
        {...homeSliderSettings}>
        {data.map(({ id, title, featured_image, small_text }) => (
          <SwiperSlide key={id}>
            <Grid align="center" gap={10}>
              <GridColumn gridColumn="span 5">
                <Heading size={1}>{title}</Heading>
                <SubHeading size={1}>Camp</SubHeading>
                {small_text && (
                  <Paragraph
                    dangerouslySetInnerHTML={{
                      __html: small_text,
                    }}
                  />
                )}
              </GridColumn>
              <GridColumn gridColumn="span 7">
                <ImgWrapper>
                  <ImageWrapper
                    divider
                    name={title}
                    src={featured_image}
                    width={1020}
                    height={445}
                  />
                  <Link href={`${GAME_PAGE}/${id}`} passHref>
                    <VideoLink>
                      <PlayBigIcon color="#fff" />
                    </VideoLink>
                  </Link>
                  {slides !== null && (
                    <OverlayWrapper>
                      {slides.map(({ id: ids, title, featured_image }, idx) => (
                        <div
                          className={`overlay-slide overlaySlideImg-${idx + 1}`}
                          key={ids + idx}>
                          <Link href={`${GAME_PAGE}/${ids}`} passHref>
                            <a>
                              <div className="overlay-flex">
                                <ImageWrapper
                                  divider
                                  key={ids}
                                  name={title}
                                  src={featured_image}
                                  width={isMobile ? 420 : idx === 0 ? 220 : 320}
                                  height={
                                    isMobile ? 240 : idx === 0 ? 160 : 230
                                  }
                                />
                                <OverlayTitle>{title}</OverlayTitle>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </OverlayWrapper>
                  )}
                </ImgWrapper>
              </GridColumn>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid align="center" gap={10}>
        <GridColumn gridColumn="span 5"></GridColumn>
        <GridColumn gridColumn="span 7">
          <PaginationStyles className="custom-pagination" />
        </GridColumn>
      </Grid>
    </SliderWrapper>
  );
};

export default HomeSlider;
