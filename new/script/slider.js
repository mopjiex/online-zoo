const swiper = new Swiper('.pets__inner', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
        nextEl: '.pets__arrow-next',
        prevEl: '.pets__arrow-prev',
      },
  });