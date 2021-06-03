var mySwiper = new Swiper('.swiper-container--editions', {

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

      1800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },

      1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 49,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
    },

      767: {
        slidesPerView: 7,
        slidesPerGroup: 0,
      }
     }

  })
