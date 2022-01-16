

const timer = (deadline) => {


    const timerDay = document.querySelectorAll('.count_1 span'),
        timerHours = document.querySelectorAll('.count_2 span'),
        timerMinutes = document.querySelectorAll('.count_3 span'),
        timerSeconds = document.querySelectorAll('.count_4 span'),
        countdownText = document.querySelector('.countdown-text');
    




    let idInterval;

    const getTimeRemaining = () => {
 
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaining = (dateStop - dateNow) / 1000;
 
        let day = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor(timeRemaining / (60 * 60) % 24); // 3. из минут получаем часы
        let minutes = Math.floor((timeRemaining / 60) % 60); // 2. из секунд получаем минуты
        let seconds = Math.floor(timeRemaining % 60); // 1. округляем полученное количество милисекунд до целочисленного
  
        return { timeRemaining, day, hours, minutes, seconds};
     
   
    };

    const getZero = (num) => {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
    };


    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerDay[0].textContent = getZero(getTime.day);
        timerHours[0].textContent = getZero(getTime.hours);
        timerMinutes[0].textContent = getZero(getTime.minutes);
        timerSeconds[0].textContent = getZero(getTime.seconds);
    
        timerDay[1].textContent = getZero(getTime.day);
        timerHours[1].textContent = getZero(getTime.hours);
        timerMinutes[1].textContent = getZero(getTime.minutes);
        timerSeconds[1].textContent = getZero(getTime.seconds);
  




    };
    updateClock();
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining <= 0) {
        countdownText.textContent = 'Акция закончилась!';
        countdownText.style.cssText = `
            color: red;
            font-size: 20px;
        `;
    }

    idInterval = setInterval(() => {
        getTime = getTimeRemaining();
              
        if (getTime.timeRemaining > 0) {
            updateClock();
        } else  if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            // countdownText.textContent = 'Акция закончилась!';
            // countdownText.getElementsByClassName.cssText = `
            //     color: red;
            //     font-size: 20px;
            // `;
        }
    }, 1000);

};

export default timer;