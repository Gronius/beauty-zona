const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  //   spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    // nextEl: '.carousel-button.next',
    nextE1: '.swiper-button-lock.next',
    prevE1: '.swiper-button-lock.prev',
    // prevEl: '.carousel-button.prev',
  },
});
