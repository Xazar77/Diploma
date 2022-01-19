const slider = () => {


          const container = document.querySelector('#services .container');
          const sliderLine = container.querySelector('.row');
          const slides = container.querySelectorAll('.row .col-md-12');
          let startCounter = 0;
          let endCounter = 1;

          let count = window.innerWidth > 576 ? 2 : 1;
          console.log(count);
        
          let arrSlide = Array.from(slides);
          
          if (sliderLine) {

            const showSlides = () => {
              arrSlide.forEach((slide, index) => {
                if (window.innerWidth > 576) {
                  if (index == startCounter || index == endCounter) {
                    slide.style.display = 'inline';

                  } else {
                    slide.style.display = 'none';
                  }
                } else {
                  if (index == startCounter ) {
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

                if(startCounter == arrSlide.length - count) {
                  startCounter = 0;
                } else {
                  startCounter += count;
                }


                if(endCounter == arrSlide.length - 1) {
                  endCounter = 1;
                }else{
                  endCounter += count;
                }
              }


              if (e.target.closest(".services__arrow--left")) {
                
                if(startCounter == 0) {
                  startCounter = arrSlide.length - count;
                } else {
                  startCounter -= count;
                }


                if(endCounter == 1) {
                  endCounter = arrSlide.length - 1;
                }else{
                  endCounter -= count;
                }
                
              
              }

              
              showSlides();
            });

          } else {
            return;
          }


      
};

export default slider;


