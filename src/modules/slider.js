const slider = () => {


          const container = document.querySelector('#services .container');
          const sliderLine = container.querySelector('.row');
          const slides = container.querySelectorAll('.row .col-md-12');
          let startCounter = 0;
          let endCounter = 1;
          let width = document.documentElement.clientWidth;
          let count = width > 576 ? 2 : 1;
          //  console.log(count);

        
          let arrSlide = Array.from(slides);
          
          if (sliderLine) {

            const showSlides = () => {
              arrSlide.forEach((slide, index) => {
                if (width > 576) {
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
              width = document.documentElement.clientWidth;
              count = width > 576 ? 2 : 1;
              showSlides();
              // console.log(count);
              

            });

            sliderLine.addEventListener('click', (e) => {
              e.preventDefault();
            
              if (e.target.closest('.services__arrow--right')) {
                // console.log(count, 'RIGHT');
                if(startCounter >= arrSlide.length - count) {
                  startCounter = 0;
                  // console.log('startCounter = 0')
                } else {
                  startCounter += count;
                  // console.log(startCounter,'startCounter')
                }

                if (endCounter >= arrSlide.length - count) {
                  endCounter = 1;
                  // console.log('endCounter = 1')
                }else{
                  endCounter += count;
                  // console.log(endCounter,'endCounter')
                }
              }


              if (e.target.closest(".services__arrow--left")) {
                // console.log(count, 'LEFT');
                if(startCounter <= count - 1) {
                  startCounter = arrSlide.length - count;
                  // console.log(startCounter,'startCounter')
                } else {
                  startCounter -= count;
                  // console.log(startCounter,'startCounter')
                }


                if(endCounter <= count - 1) {
                  endCounter = arrSlide.length - 1;
                  // console.log(endCounter,'endCounter')
                }else{
                  endCounter -= count;
                  // console.log(endCounter,'endCounter')
                }
              }
              
              
              showSlides();
            });

          } else {
            return;
          }


      
};

export default slider;


