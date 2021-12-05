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

// scroll top btn
const scroll_btn = document.querySelector(".scroll-top-btn");
window.onscroll = function(){
  if(this.scrollY > 1200){
    scroll_btn.classList.add('active')
  }else{
    scroll_btn.classList.remove('active')
  }
  
}

scroll_btn.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

// partners slider
const swiper = new Swiper('.partner-slider', {
  navigation:{
    nextEl:".partner-slider-next",
    prevEl:".partner-slider-prev"
  },
  loop:true
});
