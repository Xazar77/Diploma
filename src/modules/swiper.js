
import Swiper, { Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay]);
Swiper.use([Navigation]);


const swiper = () => {
    const width = 576;
    // const breakpoints = {
    //     width: width,
    //     slidesPerView: slidesPerView,
    //     spaceBetween: spaceBetween,
    //     showBreaakpoints: function () {
    //         if (this.width < 576) {
    //             this.slidesPerView = 1;
    //             this.spaceBetween = 20 + 'px';
    //         } else if (this.width > 576) {
    //             this.slidesPerView = 3;
    //             this.spaceBetween = 50 + 'px';
    //         }
    //     }
    //     // 576:{
    //     //     slidesPerView: 1,
    //     //     spaceBetween: 20,
    //     // },
    //     // 1024: {
    //     //     slidesPerView: 3,
    //     //     spaceBetween: 50,
    //     // }
    // };


    
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
            
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
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