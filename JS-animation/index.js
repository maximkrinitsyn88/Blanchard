let openBurger = document.querySelector('.burger')
let closeBurger = document.querySelector('.close')

let tl = gsap.timeline({paused:true})

tl.to('.menu', {display: 'block', duration: 0.1})

  .fromTo(".menu__top",
    {opacity: 0, y: -50},
    {opacity: 1, y: 0, duration: 0.5})

  .fromTo(".menu__container",
    {opacity: 0, y: 50},
    {opacity: 1, y: 0, duration: 0.5})

  .fromTo(".menu__nav",
    {opacity: 0, y: 30},
    {opacity: 1, y: 0, duration: 0.5})

  .fromTo(".social, .menu__right",
    {opacity: 0, y: 30},
    {opacity: 1, y: 0, duration: 1});

openBurger.onclick = function() {
  tl.play();
}

closeBurger.onclick = function() {
  tl.reverse();
}

setTimeout(() => {
  gsap.fromTo(".hero__title, .hero__btn",
  {opacity: 0, y: 50},
  {opacity: 1, y:0, duration: 1});
}, 1000)

setTimeout(() => {
  gsap.fromTo(".hero__descr",
  {opacity: 0},
  {opacity: 1, duration: 2});
}, 1500)

setTimeout(() => {
  gsap.fromTo(".photos-wrap img:first-child",
  {opacity: 0, scale: 0.9},
  {opacity: 1, scale: 1, duration: 0.5});
}, 1700)

setTimeout(() => {
  gsap.fromTo(".photos-wrap img:nth-child(2)",
  {opacity: 0},
  {opacity: 1, duration: 1.5});
}, 1900)

setTimeout(() => {
  gsap.fromTo(".photos-wrap img:last-child",
  {opacity: 0},
  {opacity: 1, duration: 1.5});
}, 2100)

setTimeout(() => {
  gsap.fromTo(".photos__author",
  {opacity: 0},
  {opacity: 1, duration: 1.5});
}, 2200)
