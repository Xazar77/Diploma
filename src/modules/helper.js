

const validate = (list) => {

    let success = false;

    const testPhone = /^([+]?[0-9]{6,16})$/i;
    const testName = /^[а-яёa-z]{2,}$/i;
    
    let ttext;
    let ttext1;

    let pphone;
    let pphone1;

    list.forEach(input => {

        if (input.closest('[name=fio]')) {
            ttext = input.closest('[name=fio]');
            ttext = ttext.value;
            
        }

        if (input.closest('[name=phone]')) {
            pphone = input.closest('[name=phone]');
            pphone = pphone.value;
            
                
        }
           
        
    });
    
        
    ttext1 = testName.test(ttext);
   
    
   
        
    pphone1 = testPhone.test(pphone);
   
    

    if (ttext == ''  || pphone == '' ) {
        success = false;
        
    }
    if (ttext1 && pphone1) {
        list.forEach(input => {
            
            input.classList.remove('error');
            
        });

        success = true;
        
    }
    

    return success;
};


export { validate };


const animate = ({timing, draw, duration}) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        
        let progress = timing(timeFraction);

        draw(progress); 

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

export {animate};