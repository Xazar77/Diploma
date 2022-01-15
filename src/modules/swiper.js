

import Swiper, { Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay]);
Swiper.use([Navigation]);

const swiper = () => {
    
    
    const swiper = new Swiper('.swiper', {
        speed: 200,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false,
        // },
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
    //     let width = 130; // ширина картинки
    //     let count = 3; // видимое количество изображений

    //     let list = document.querySelector('.benefits-wrap');
    //     let listElems = list.querySelectorAll('.benefits__item');
    
    // console.log(list);
    // console.log(listElems);

    //     let position = 0; // положение ленты прокрутки

    //     document.querySelector('.benefits__arrow--left').onclick = function() {
    // //     // сдвиг влево
    //     position += width * count;
    // //     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //         position = Math.min(position, 0);
    //     list.style.marginLeft = position + 'px';
    //     };

    // document.querySelector('.benefits__arrow--right').onclick = function () {
    // //     // сдвиг вправо
    //     position -= width * count;
    // //     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //     position = Math.max(position, -width * (listElems.length - count));
    //     list.style.marginLeft = position + 'px';
    // };


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

// let width = 130; // ширина картинки
// let count = 3; // видимое количество изображений

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // положение ленты прокрутки

// carousel.querySelector('.prev').onclick = function() {
//   // сдвиг влево
//   position += width * count;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
//   // сдвиг вправо
//   position -= width * count;
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };