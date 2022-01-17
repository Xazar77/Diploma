const slider = () => {


  const container = document.querySelector('#services .container');
  const sliderLine = container.querySelector('.row');
  const slides = container.querySelectorAll('.row .col-md-12');



 
  let arrSlide = Array.from(slides);

  if (sliderLine) {

    const showSlides = () => {
      arrSlide.forEach((slide, index) => {
        if (document.documentElement.clientWidth > 576) {
          if (index == 0 || index == 1) {
            slide.style.display = 'inline';

          } else {
            slide.style.display = 'none';
          }
        } else {
          if (index == 0) {
            slide.style.display = 'inline';
          } else {
            slide.style.display = 'none';
          }
        }
      });

    };

    showSlides();

    window.addEventListener('resize', () => {
      showSlides();
    });

    sliderLine.addEventListener('click', (e) => {
      e.preventDefault();

     
      if (e.target.closest('.services__arrow--right')) {
        
        arrSlide.forEach((item, index) => {
          

          if (item.style.display === 'inline') {
            item.style.display = 'none';
          } else {
            item.style.display = 'inline';
          }
        });

      }
      if (e.target.closest(".services__arrow--left")) {
        
        arrSlide = arrSlide.reverse()
        arrSlide.forEach((item, index) => {
          
          
          
          if (item.style.display === 'none') {
            item.style.display = 'inline';
          } else {
            item.style.display = 'none';
          }
          
        });

        showSlides(slides);
      }
    });

  } else {
    return;
  }



};

export default slider;


