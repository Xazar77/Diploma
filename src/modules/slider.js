const slider = () => {

  const services = document.getElementById('services');
  const sliderBlock = services.querySelector('.row');
  let slides = services.querySelectorAll('.col-md-12.col-lg-6');
  const arrowsBtn = services.querySelector('.services-arrows');


  if (!sliderBlock) {
    return;
  };

  let slidesArray = Array.from(slides);

  const showSlides = () => {
    slidesArray.forEach((slide, index) => {
      if (document.documentElement.scrollWidth > 576) {
        if (index == 0 || index == 1) {
          slide.classList.remove('hidden');
        } else {
          slide.classList.add('hidden');
        }
      } else {
        if (index == 0) {
          slide.classList.remove('hidden');
        } else {
          slide.classList.add('hidden');
        }
      }
    });
  };
  showSlides();





  const addToSlide = (btn) => {
    let movedSlide = (btn ? slidesArray.shift() : slidesArray.pop());
    btn ? slidesArray.push(movedSlide) : slidesArray.unshift(movedSlide);
  };



  window.addEventListener('resize', () => {
    showSlides(slides);
  });

  arrowsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rightBtn = e.target.closest(".services__arrow--right");
    const leftBtn = e.target.closest(".services__arrow--left");

    if (!(leftBtn || rightBtn)) return;
    addToSlide(!!rightBtn);

    if (document.documentElement.scrollWidth > 576) {
      addToSlide(!!rightBtn);
    }
    showSlides();
  });



};

export default slider;