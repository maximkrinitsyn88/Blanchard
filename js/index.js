window.addEventListener('DOMContentLoaded', function() {

    // adaptive 1024px

    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    document.querySelector('#menu__close').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('close')
    })

    document.querySelector('#menu__close').addEventListener('click', function() {
        document.querySelector('#menu').classList.remove('is-active')
        document.querySelector('#menu').classList.remove('close')
    })

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('#form-search').classList.toggle('is-active')
    })

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('#form-search__adaptive').classList.toggle('is-active')
    })

    // adaptive 1024px

    // adaptive 768px

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('#burger').classList.toggle('is-close')
    })

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('.logo').classList.toggle('is-close')
    })

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('.form-search__close').classList.toggle('is-active')
    })

    document.querySelector('#form-search__close').addEventListener('click', function() {
        document.querySelector('#form-search').classList.toggle('is-close')
        document.querySelector('#form-search').classList.remove('is-active')
        document.querySelector('#form-search__close').classList.remove('is-active')
        document.querySelector('.logo').classList.remove('is-close')
        document.querySelector('#burger').classList.remove('is-close')
    })

     // adaptive 768px

    //  adaptive 320px

    document.querySelector('#form-search__btn').addEventListener('click', function() {
        document.querySelector('.nav-first').classList.toggle('is-active')
    })

    document.querySelector('#form-search__close').addEventListener('click', function() {
        document.querySelector('.nav-first').classList.remove('is-active')
        document.querySelector('#form-search__adaptive').classList.remove('is-active')
    })

    //  adaptive 320px


    // menu

        document.querySelectorAll('.nav-second__link').forEach(function (dropdown) {
            dropdown.addEventListener('click', function(event) {
                document.querySelectorAll('.dropdown-scroll').forEach(function (dropdownContent) {
                    dropdownContent.classList.remove('is-active')
                })
                const path = event.currentTarget.dataset.path
                    document.querySelector(`[data-target="${path}"]`).classList.toggle('is-active')
            })
        })

        document.querySelectorAll('.dropdown__item').forEach(function (dropdownClose) {
            dropdownClose.addEventListener('click', function() {
                document.querySelectorAll('.dropdown-scroll').forEach(function(dropdownContent) {
                    dropdownContent.classList.remove('is-active')
                })
            })
        })

        window.onclick = function(event) {
            if (!event.target.matches('.nav-second__link')) {
                let dropdowns = document.getElementsByClassName('dropdown-scroll');
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('is-active')) {
                        openDropdown.classList.remove('is-active');
                    }
                }
            }
        }

    // menu

    // tabs countries

        document.querySelectorAll('.catalog-section__countries__link').forEach(function(tabs) {
            tabs.addEventListener('click', function(event) {

                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.catalog-section__artists').forEach(function(tabContent) {
                    tabContent.classList.remove('is-active')
                })
                document.querySelector(`[data-target="${path}"]`).classList.add('is-active')

            })
        })

    // tabs countries

    // tabs logo

        document.querySelectorAll('.catalog-section__countries__link').forEach(function(el) {
            el.addEventListener('click', function(event) {
                document.querySelectorAll('.catalog-section__countries__item').forEach(function(el) {
                    el.classList.remove('is-active')
            })
                const logo = event.currentTarget.dataset.logo
                document.querySelector(`[data-target="${logo}"]`).classList.add('is-active')
            })
        })

    // tabs logo

    // tabs artists


        document.querySelectorAll('.accordion-section__link').forEach(function(el) {
            el.addEventListener('click', function(event) {

                const artist = event.currentTarget.dataset.artist

                document.querySelectorAll('.catalog-section__artists__description').forEach(function(el) {
                    el.classList.remove('is-active')
            })
                document.querySelector(`[data-target="${artist}"]`).classList.add('is-active')
        })
    })

    // tabs artists


    // active artist

        $('.accordion-section__link').click(function(){
            $('.accordion-section__link').removeClass('is-active');
            $(this).addClass('is-active');
        });

     // active artist

     // tabs

        document.querySelectorAll('.catalog-section__countries__link').forEach(function(tabs) {
            tabs.addEventListener('click', function(event) {

                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.catalog-section__artists__description').forEach(function(el) {
                    el.classList.remove('is-active')
                })
                document.querySelectorAll('.accordion-section__link').forEach(function(el) {
                    el.classList.remove('is-active')
                })

                document.querySelector(`[data-target="${path}"] .catalog-section__artists__description`).classList.add('is-active')
                document.querySelector(`[data-target="${path}"] .accordion-section__link`).classList.add('is-active')
        })
    })

    // tabs

    // button events

    document.querySelector('.events-section-button').addEventListener('click', function() {
        document.querySelectorAll('.events-section__slide:nth-last-child(-n+2)').forEach(function(events) {
            events.classList.add('is-active')
        })
        document.querySelector('.events-section__slide:nth-child(3)').classList.add('is-active')
        document.querySelector('.events-section__slide:nth-child(2)').classList.add('is-active')
        document.querySelector('.events-section-button').classList.add('is-close')
    })

    // button events


    // categories mobile

    if ($(window).width() < 767) {
      $('.editions-section__categories__label').click(function(){
      $(this).addClass('is-active');
    });

    document.querySelector('.editions-section__categories__title').addEventListener('click', function() {
      document.querySelector('.editions-section__categories__block--mobile').classList.add('is-active')
      document.querySelector('.editions-section__categories__title-open').classList.toggle('is-active')
      document.querySelectorAll('.editions-section__categories__label').forEach(function(e) {
        e.classList.toggle('visible')
      })
    })
  }

    if ($(window).width() < 321) {
      document.querySelector('.editions-section__categories__title').addEventListener('click', function() {
      document.querySelectorAll('.editions-section__categories__label.is-active').forEach(function(e) {
        e.classList.toggle('close-button')
      })
    })
  };

    // categories mobile


    // active picture

    document.querySelectorAll('.swiper-slide--gallery').forEach(function(pic) {
      pic.addEventListener('click', function(event) {

        document.body.classList.add('modal')

        const pict = event.currentTarget.dataset.pict

        document.querySelectorAll('.swiper-slide__active-block').forEach(function(pictAct) {
            pictAct.classList.remove('is-active')
        })
        document.querySelector(`[data-target="${pict}"]`).classList.add('is-active')
      })
    })

    // active picture

    // close picture

    document.querySelectorAll('.close--portrait').forEach(function(q) {
      q.addEventListener('click', function() {

        document.body.classList.remove('modal')
      document.querySelectorAll('.swiper-slide__active-block').forEach(function(e) {
        e.classList.remove('is-active')
      })
    })
  })
    // close picture

  // scroll


  if ($(window).width() < 769) {
    document.querySelectorAll('.accordion-section__link').forEach(function(q) {
      q.addEventListener('click', function() {
        document.querySelector('.catalog-section__artists__description.is-active').scrollIntoView ({
          block: 'start',
          behavior: 'smooth',
            })
        })
      })
    }



  // scroll

})






