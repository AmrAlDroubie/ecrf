// open collapsed navbar
let navMenu = document.querySelector(".navbar-collapse");
let navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", (_) => {
  navMenu.classList.toggle("active");
});

// training slider
const training_slider = new Swiper(".training-slider", {
  speed:1000,
  spaceBetween:10,
  slidesPerView: 2,
  freeMode:true
});
