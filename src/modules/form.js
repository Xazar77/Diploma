

const form = (formId, someElement) => {

    const form = document.querySelectorAll(formId);
    console.log(form);

    const statusBlock = document.createElement('div'),
        statusImg = document.createElement('img');
    const loadText = 'images/oval.svg',
        errorText = 'Ошибка...',
        successText = 'Спасибо! Наш менеджер свами свяжется!';
    statusBlock.style.color = 'yellow';
        
        statusImg.style.cssText = `
            color: yellow;
            display: block;
            margin: 0 auto;
            text-align:center;
    `;
    

    const validate = (list) => {

        let success = false;

        const testPhone = /^(\+7|7|8)?[\-]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$/;
        const testName = /^[а-яё ]+$/i;
        


        let ttext;
        let ttext1;

     
        let pphohe;
        let pphone1;

        list.forEach(input => {

            if (input.closest('[name=user_name]')) {
                ttext = input.closest('[name=user_name]');
                ttext = ttext.value;
            }

            if (input.closest('[name=user_phone]')) {
                pphohe = input.closest('[name=user_phone]');
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

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };
    

    const submitForm = (form, someElement) => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        
        statusImg.src = loadText;
        form.append(statusImg);
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElement.forEach(elem => {
            const element = document.getElementById(elem.id);


            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }

        });


        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    statusImg.src = '';
                   
                    formElements.forEach(input => {
                        input.value = '';
                        
                    });
                    
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });

        } else {


            alert('Данные не валидны!!!!');
            // statusBlock.textContent = errorText;
            // statusImg.src = '';
        }
    };

    
    const formListener = (form, someElement) => {
        try {
            if (!form) {
                throw new Error('Верните форму на место!!!');
            }
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                statusBlock.textContent = '';
                submitForm(form, someElement);


            });
        } catch (error) {
            console.log(error.message);
        }
    };
    formListener(form1, someElement1);
    formListener(form2, someElement2);
    




};
export default form;