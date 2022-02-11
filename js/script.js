const swiper = new Swiper('.swiper', {
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
           slidesPerView: 2,
        },
      },
    spaceBetween: 44,
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });