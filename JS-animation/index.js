
document.querySelector('.burger').addEventListener('click', function () {

  setTimeout(() => {
  document.querySelector('.menu').classList.add('menu--open')
  gsap.fromTo(".menu--open",
  {opacity: 0},
  {opacity: 1, duration: 0.5});
  gsap.fromTo(".menu__top",
  {opacity: 0, y: -50},
  {opacity: 1, y: 0, duration: 0.5});
}, 200)

  setTimeout(() => {
  gsap.fromTo(".menu__container",
  {opacity: 0, y: 50},
  {opacity: 1, y: 0, duration: 1});
}, 400)

setTimeout(() => {
  gsap.fromTo(".menu__nav",
  {opacity: 0, y: 10},
  {opacity: 1, y: 0, duration: 1});
}, 500)

setTimeout(() => {
  gsap.fromTo(".social, .menu__right",
  {opacity: 0, y: 10},
  {opacity: 1, y: 0, duration: 1});
}, 800)
})

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.menu').classList.remove('menu--open')
})

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
