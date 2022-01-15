
import { validate } from "./helper";

const form = (formId) => {

    const forms = document.querySelectorAll(formId);
    

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

                if (validate(inputList)) {
                    sendData(formBody)
                        .then(data => {
                        statusBlock.textContent = successText;
                        statusImg.src = '';

                            inputList.forEach(input => {
                                input.value = '';
                            
                            });
                        
                        }).catch(error => {
                            
                            statusBlock.textContent = errorText;
                        });
                } else {
                    alert('Данные не валидны!!!!');
                    statusBlock.textContent = '';
                    
                }
            });
        }catch (error) {
            console.log(error.message);
        }
    });



    

    




};
export default form;