function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carouselInner = document.querySelector('.carousel__inner');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let slideWidth = carouselInner.offsetWidth;

  // for arrow visibility
  let currentSlide = 1;
  let numberOfSlides = document.querySelectorAll('.carousel__inner > .carousel__slide').length;

  function changeArrowVisibility () {
    switch (currentSlide) {
    case 1:
      arrowLeft.style.display = 'none';
      break;

    case numberOfSlides:
      arrowRight.style.display = 'none';
      break;

    default: //2 and 3 slides
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
      break;
    }
  }

  changeArrowVisibility();

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      currentSlide += 1;
      changeArrowVisibility();
    }

    if (event.target.closest('.carousel__arrow_left')) {
      currentSlide -= 1;
      carouselInner.style.transform = `translateX(-${(currentSlide - 1) * slideWidth}px)`;
      changeArrowVisibility();
    }
  });
}
