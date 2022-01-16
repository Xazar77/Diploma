

const validate = (list) => {

    let success = false;

    const testPhone = /^([+]?[0-9]{6,16})$/i;
    const testName = /^[а-яёa-z]{2,}$/i;
    
    let ttext;
    let ttext1;

    let pphohe;
    let pphone1;

    list.forEach(input => {

        if (input.closest('[name=fio]')) {
            ttext = input.closest('[name=fio]');
            ttext = ttext.value;
        }

        if (input.closest('[name=phone]')) {
            pphohe = input.closest('[name=phone]');
            pphohe = pphohe.value;
          
        }
        


    });
    
        
    ttext1 = testName.test(ttext);
        
    pphone1 = testPhone.test(pphohe);
       

    if (ttext == ''  || pphohe == '' ) {
        success = false;
        // alert('Заполните все поля!!!');
    }
    if (ttext1 && pphone1) {

        success = true;
        
    } 

    return success;
};


export { validate };


const animate = ({timing, draw, duration}) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

export {animate};