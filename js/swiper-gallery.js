var mySwiper = new Swiper('.swiper-container--gallery', {

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
            slidesPerView: 3,
            slidesPerColumnFill: 'row',
            slidesPerColumn: 2,
            spaceBetween: 50,
        },

        768: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 34,
        },

        320: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'row',
          spaceBetween: 0,
        },
      }

    })






