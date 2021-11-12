export const homeSliderSettings = {
  spaceBetween: 0,
  slidesPerView: 1,
  effect: 'fade',
  pagination: {
    clickable: true,
    el: '.custom-pagination',
    type: 'bullets',
    renderBullet: (index, className) => {
      return (
        '<span class="pagination-bullet-item ' +
        className +
        '"><span class="home-pagination-bullet"></span></span>'
      );
    },
  },
};

export const carouselSliderSettings = {
  spaceBetween: 0,
  slidesPerView: 4,
  pagination: {
    clickable: true,
    el: '.custom-pag',
    type: 'bullets',
    renderBullet: (index, className) => {
      return (
        '<span class="pagination-bullet-item ' +
        className +
        '"><span class="home-pagination-bullet"></span></span>'
      );
    },
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
};

export const settingsAlbumSlider = {
  spaceBetween: 40,
  slidesPerView: 2,
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
    },
  },
};
