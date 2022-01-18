const slider = () => {


          const container = document.querySelector('#services .container');
          const sliderLine = container.querySelector('.row');
          const slides = container.querySelectorAll('.row .col-md-12');
          let startCounter = 0;
          let endCounter = 1;


        
          let arrSlide = Array.from(slides);
          
          if (sliderLine) {

            const showSlides = () => {
              arrSlide.forEach((slide, index) => {
                if (document.documentElement.scrollWidth > 576) {
                  if (index == startCounter || index == endCounter) {
                    slide.style.display = 'inline';

                  } else {
                    slide.style.display = 'none';
                  }
                } else {
                  if (index == startCounter) {
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

                startCounter += 1;
                endCounter += 1;
                if(startCounter > arrSlide.length - 1) {
                  startCounter = 0;
                }
                if(endCounter > arrSlide.length - 1) {
                  endCounter = 0;
                }

              }
              if (e.target.closest(".services__arrow--left")) {

                startCounter -= 1;
                endCounter -= 1;
                if(startCounter < 0) {
                  startCounter = arrSlide.length - 1;
                }
                if(endCounter < 0) {
                  endCounter = arrSlide.length - 1;
                }
              }
              showSlides();
            });

          } else {
            return;
          }


      
};

export default slider;


