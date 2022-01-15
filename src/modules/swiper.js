

import Swiper, { Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay]);
Swiper.use([Navigation]);

const swiper = () => {
    
    
    const swiper = new Swiper('.swiper', {
        speed: 200,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
            50: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 100,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 200,
                
            },
           
        },
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left'
        }
      });

};
export default swiper;




// breakpoints: function () {
//     if (this.width <= 576) {
//         this.slidesPerView = 1;
//         this.spaceBetween = 20 + 'px';
//     } else if (this.width > 576) {
//         this.slidesPerView = 3;
//         this.spaceBetween = 50 + 'px';
//     }
// },