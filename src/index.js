
import modalRequest from './modules/modalRequest';
import modalFroze from './modules/modalFroze';
import slider from './modules/slider';
import timer from './modules/timer';
import swiper from './modules/swiper';
import form from './modules/form';
import smoothScroll from './modules/smoothScroll';
import sertificate from './modules/sertificate';
import calk from './modules/calc';
import calc from './modules/calc';





modalRequest();
modalFroze();
slider();
timer('26 january 2022');
swiper();

smoothScroll();
sertificate();
calc();
form('[name=callback-form]');
form('[name=application-form]');
form('.form-horizontal');
// form(
//      '.form-horizontal',
//     someElement = [{
//         type: 'input',
//         id: 'calcTotal'
//     }]
// );