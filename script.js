
var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 15,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true
   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});