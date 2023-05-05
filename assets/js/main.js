// BURGER

document.getElementById('burger-btn-open').addEventListener('click', function(){
  document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burger-btn-hide').addEventListener('click', function(){
  document.getElementById('burger__menu').classList.remove('--show');
});

// SWIPERS

var swiper = new Swiper(".firstSwiper", {
    navigation: {
      nextEl: ".firstSwiper-button-next",
      prevEl: ".firstSwiper-button-prev",
    },
});

var swiper2 = new Swiper(".projectsSwiper", {
  navigation: {
    nextEl: ".projectsSwiper-button-next",
    prevEl: ".projectsSwiper-button-prev",
  },
});

var swiper3 = new Swiper(".securitySwiper", {
  navigation: {
    nextEl: ".securitySwiper-button-next",
    prevEl: ".securitySwiper-button-prev, .securitySwiper-button-prev-2",
  },
});
