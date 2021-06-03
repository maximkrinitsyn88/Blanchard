
window.addEventListener('resize', function() {
if (!document.querySelector('.events-section').swiper && (document.documentElement.clientWidth < 768))  {
new Swiper('.events-section', {
    effect: '',
    pagination: {
        el: '.swiper-pagination-events',
        type: 'bullets',
        clickable: true,
      },
    })
  }
  if (document.querySelector('.events-section').swiper && (document.documentElement.clientWidth > 767)) {
    document.querySelector('.events-section').swiper.destroy();
    }
  })

  window.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.events-section').swiper && (document.documentElement.clientWidth < 768))  {
      new Swiper('.events-section', {
          effect: '',
          pagination: {
              el: '.swiper-pagination-events',
              type: 'bullets',
              clickable: true,
            },
          })
        }
        if (document.querySelector('.events-section').swiper && (document.documentElement.clientWidth > 767)) {
          document.querySelector('.events-section').swiper.destroy();
          }
  })




