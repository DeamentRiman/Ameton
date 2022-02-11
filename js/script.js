const swiper = new Swiper('.swiper-container', {
//   longSwipes: true,
//   setWrapperSize: false,
//   watchOverflow: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 24,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
