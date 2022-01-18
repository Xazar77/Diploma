

const timer = (deadline) => {


    const timerDay = document.querySelectorAll('.count_1 span'),
        timerHours = document.querySelectorAll('.count_2 span'),
        timerMinutes = document.querySelectorAll('.count_3 span'),
        timerSeconds = document.querySelectorAll('.count_4 span'),
        countdownText = document.querySelectorAll('.countdown-text');

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
        if (getTime.timeRemaining > 0) {

            for (let i = 0; i <= 1; i++) {
                timerDay[i].textContent = getZero(getTime.day);
                timerHours[i].textContent = getZero(getTime.hours);
                timerMinutes[i].textContent = getZero(getTime.minutes);
                timerSeconds[i].textContent = getZero(getTime.seconds);
            }
            
        
            
        }
        
    };
    updateClock();
   

    idInterval = setInterval(() => {
       let getTime = getTimeRemaining();
              
        if (getTime.timeRemaining > 0) {
            updateClock();
        } else  if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            // countdownText.forEach(text => {
            //     text.textContent = 'Акция закончилась!';
            //     text.style.cssText = `
            //     color: red;
            //     font-size: 20px;
            // `;
            // });
           
        }
    }, 1000);

};

export default timer;