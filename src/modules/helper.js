

const validate = (list) => {

    let success = false;

    const testPhone = /^([+]?[0-9]{3,16})$/i;
    const testName = /^[а-яёa-z]+$/i;
    
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
    
        console.log(ttext);
    ttext1 = testName.test(ttext);
        console.log(ttext1);
        console.log(pphohe);
    pphone1 = testPhone.test(pphohe);
        console.log(pphone1);
    console.log(ttext1 && pphone1);

    if (ttext == ''  || pphohe == '' ) {
        success = false;
        alert('Заполните все поля!!!');
    }
    if (ttext1 && pphone1) {

        success = true;
        console.log('YES');

    } 

    return success;
};


export {validate};