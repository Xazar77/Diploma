
import { validate } from "./helper";

const form = (formId) => {

    const forms = document.querySelectorAll(formId);
    const inputName = document.querySelectorAll('[name=fio]');
    const inputPhone = document.querySelectorAll('[name=phone]');
   
    
    
  

    const statusBlock = document.createElement('div'),
        statusImg = document.createElement('img');
    const loadText = 'images/spinner.svg',
        errorText = 'Ошибка...',
        successText = 'Спасибо! Наш менеджер свами свяжется!';
    statusBlock.style.cssText = `
        font-size: 20px;
        color: red;
        text-align:center;
    `;
        
    statusImg.style.cssText = `
        color: yellow;
        display: block;
        margin: 0 auto;
        text-align:center;
    `;

    const validName = (list) => {
        list.forEach(name => {
            name.addEventListener('input', (e) => {

                let testText = /^[а-яёa-z]{2,}/gi;

                if (testText.test(e.target.value)) {
                    name.value = e.target.value;
                } 
                name.value = e.target.value.replace(/^[^а-яёa-z]+/gi, '').replace(/[^а-яёa-z]+/gi, '').replace(/[^а-яёa-z]+$/gi, '');
            });
        });
    };
    validName(inputName);

    const validPhone = (list) => {
        list.forEach(phone => {
            phone.addEventListener('input', (e) => {

                let testPhone = /^([+]?[0-9]{6,16})$/i;
                console.log(testPhone.test(e.target.value));
                if (testPhone.test(e.target.value)) {
                    phone.value = e.target.value;
                } else {
                    phone.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\-+/g, '-').replace(/[^\d\(\)\-\+]+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '');
                }

            });

        });

    };
    validPhone(inputPhone);
    

       const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };



    forms.forEach(form => {
        try {
            if (!form) {
                throw new Error('Верните форму на место!!!');
            }
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const inputList = form.querySelectorAll('input');
                
                const formData = new FormData(form);
                const formBody = {};

                statusImg.src = loadText;
                
                form.append(statusImg);
                form.append(statusBlock);

                formData.forEach((val, key) => {
                    formBody[key] = val;
                });
                if (document.getElementById('calc-total')) {
                    const element = document.getElementById('calc-total');
                    let total = 'Итого за работу:';
                    if (element.placeholder == 'Итого') {
                        element.placeholder = 0;
                         
                    } else {
                        formBody[total] = element.placeholder;
                    }
               
               }
        

                if (validate(inputList)) {
                    sendData(formBody)
                        .then(data => {
                            statusBlock.textContent = successText;
                            statusImg.src = '';
                            setTimeout(() => {
                                statusBlock.textContent = '';
                            }, 1000);

                            inputList.forEach(input => {
                                input.value = '';
                            
                            });
                        
                        }).catch(error => {
                            
                            statusBlock.textContent = errorText;
                        });
                } else {
                    alert('Данные не валидны!!!!');
                    statusBlock.textContent = '';
                    statusImg.src = '';
                }
            });
        }catch (error) {
            console.log(error.message);
        }
    });



    

};
export default form;