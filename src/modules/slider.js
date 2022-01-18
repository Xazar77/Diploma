const slider = () => {


  // const container = document.querySelector('#services .container');
  // const sliderLine = container.querySelector('.row');
  // const slides = container.querySelectorAll('.row .col-md-12');



 
  // let arrSlide = Array.from(slides);
  // console.log(arrSlide)

  // if (sliderLine) {

  //   const showSlides = () => {
  //     arrSlide.forEach((slide, index) => {
  //       if (document.documentElement.scrollWidth > 576) {
  //         if (index == 0 || index == 1) {
  //           slide.style.display = 'inline';

  //         } else {
  //           slide.style.display = 'none';
  //         }
  //       } else {
  //         if (index == 0) {
  //           slide.style.display = 'inline';
  //           // slide.style.height = 'auto';
  //         } else {
  //           slide.style.display = 'none';
  //           // slide.style.height = 'auto';
  //         }
  //       }
  //     });

  //   };

  //   showSlides();

  //   window.addEventListener('resize', () => {
  //     showSlides();
  //   });

  //   sliderLine.addEventListener('click', (e) => {
  //     e.preventDefault();

     
  //     if (e.target.closest('.services__arrow--right')) {
        
  //       arrSlide.forEach(item => {
          

  //         if (item.style.display === 'inline') {
  //           item.style.display = 'none';
  //         } else {
  //           item.style.display = 'inline';
  //         }
  //       });

  //     }
  //     if (e.target.closest(".services__arrow--left")) {
        
  //       arrSlide = arrSlide.reverse();
  //       arrSlide.forEach(item => {
  //         if (item.style.display === 'none') {
  //           item.style.display = 'inline';
  //         } else {
  //           item.style.display = 'none';
  //         }
          
  //       });

  //       showSlides(slides);
  //     }
  //   });

  // } else {
  //   return;
  // }


// 2 вариант

  // const container = document.querySelector('#services .container');
  // const sliderLine = container.querySelector('.row');
  // const slides = container.querySelectorAll('.row .col-md-12');
  // const arrow = container.querySelectorAll('.services__arrow');
  // // console.log(arrow);
  // let count = 0;
  // let width;

  // container.style.overflow = 'hidden';

  // function init() {
  //   console.log("YES");
  //   width = container.offsetWidth;
  //   sliderLine.style.width = width * slides.length + 'px';
  //   slides.forEach(item => {
  //     // console.log(item)
  //     if (document.documentElement.scrollWidth > 576) {
  //       item.style.width = width/2 + 'px';
  //     } else {
  //       item.style.width = width + 'px';
  //     }
      
  //     // item.style.height = 'auto';
  //   });
  //   rollSlider();
  //   // console.log(width);
  // }
  // init();
  // window.addEventListener('resize', init);
  // // init();

  // // arrow.forEach(btn => {
  //   // btn.style.display = 'block';
  //   sliderLine.addEventListener('click', (e) => {

  //     if (e.target.closest('.services__arrow--right')) { 
  //       // console.log("RIGHT")
  //       count++;
  //       console.log(count)
  //       if (count >= slides.length) {
  //         count = 0;
  //       }
        
  //       rollSlider();
  //     }
  //     if (e.target.closest(".services__arrow--left")) {
  //       // console.log("LEFT")
  //       count--;
  //       if (count < 0) {
  //         count = slides.length - 1;
  //       }
  //       console.log(count)
  //       rollSlider();
  //      }

  //   });
  // // });

  // function rollSlider() {
  //   sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  // }

  
  
  /// 3 вариант
  
      const container = document.querySelector('#services .container');
      const sliderLine = container.querySelector('.row');
      const slides = container.querySelectorAll('.row .col-md-12');



    
      let arrSlide = Array.from(slides);
      // console.log(arrSlide)

      if (sliderLine) {

        const showSlides = () => {
          arrSlide.forEach((slide, index) => {
            if (document.documentElement.clientWidth < 576) {
              console.log("YESSSSSSSSSS");
              slide.classList.remove('hidden');
              // if (index == 0) {
              //   slide.style.display = 'inline';
              // } else if (index != 0) {
              //   slide.style.display = 'none';
              // }
            
            }
            // if (document.documentElement.clientWidth >= 576) {
            //   console.log("OKKKKKKKK");
            //   slide.style.display = 'none';
              
            
            // }
          });

        };

        showSlides();

        window.addEventListener('resize', () => {
          showSlides();
        });

        sliderLine.addEventListener('click', (e) => {
          e.preventDefault();

        
          if (e.target.closest('.services__arrow--right')) {
            
            arrSlide.forEach(item => {
              item.classList.toggle('hidden');

            });

          }
          if (e.target.closest(".services__arrow--left")) {
            
            arrSlide = arrSlide.reverse();
            arrSlide.forEach(item => {
              item.classList.toggle('hidden');
              
            });

            showSlides(slides);
          }
        });

      } else {
        return;
      }

};

export default slider;


