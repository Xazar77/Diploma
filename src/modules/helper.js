

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
        
    }
    if (ttext1 && pphone1) {

        success = true;
        console.log('YES');

    } 

    return success;
};


export {validate};