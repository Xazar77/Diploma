
import modalRequest from './modules/modalRequest';
import modalFroze from './modules/modalFroze';
import slider from './modules/slider';
import timer from './modules/timer';
import swiper from './modules/swiper';
import form from './modules/form';
import smoothScroll from './modules/smoothScroll';
import sertificate from './modules/sertificate';





modalRequest();
modalFroze();
slider();
timer('16 january 2022');
swiper();

smoothScroll();
form('.form-horizontal');
form('[name=callback-form]');
form('[name=application-form]');
sertificate();