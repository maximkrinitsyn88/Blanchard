var mySwiper = new Swiper('.swiper-container--projects', {

  pagination: {
      el: '.swiper-pagination--gallery',
      type: 'fraction',
  },

  navigation: {
      nextEl: '.swiper-button-next--gallery',
      prevEl: '.swiper-button-prev--gallery',
  },

  effect: '',

  breakpoints: {

      1920: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 50,
      },

      1024: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 50,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
    },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    }

  })
