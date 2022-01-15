
import modalRequest from './modules/modalRequest';
import modalFroze from './modules/modalFroze';
import slider from './modules/slider';
import timer from './modules/timer';
import swiper from './modules/swiper';
import form from './modules/form';
import smoothScroll from './modules/smoothScroll';





modalRequest();
modalFroze();
slider();
timer('26 january 2022');
swiper();
// form({
//     formId: '.order-form', 
//     someElement: [{
//         type: 'block',
//         id: 'total'
//     }],
// });
smoothScroll();
form('.form-horizontal');
