
import { validate } from "./helper";

const form = (formId) => {

    const forms = document.querySelectorAll(formId);
    // const input = form[0].querySelectorAll('input');
    // console.log(input);
    // console.log(form[0]);

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



    

    // const submitForm = (form) => {
    //     const formElements = form.querySelectorAll('input');
    //     console.log(formElements);
    //     const formData = new FormData(form);
    //     const formBody = {};

        
    //     statusImg.src = loadText;
    //     form.append(statusImg);
    //     form.append(statusBlock);

    //     formData.forEach((val, key) => {
    //         formBody[key] = val;
    //     });
    //     someElement.forEach(elem => {
    //         const element = document.getElementById(elem.id);


    //         if (elem.type === 'block') {
    //             formBody[elem.id] = element.textContent;
    //         } else if (elem.type === 'input') {
    //             formBody[elem.id] = element.value;
    //         }

    //     });


    //     if (validate(formElements)) {
    //         sendData(formBody)
    //             .then(data => {
    //                 statusBlock.textContent = successText;
    //                 statusImg.src = '';
                   
    //                 formElements.forEach(input => {
    //                     input.value = '';
                        
    //                 });
                    
    //             })
    //             .catch(error => {
    //                 statusBlock.textContent = errorText;
    //             });

    //     } else {


    //         alert('Данные не валидны!!!!');
    //         // statusBlock.textContent = errorText;
    //         // statusImg.src = '';
    //     }
    // };

    
    // const formListener = (form) => {
    //     try {
    //         if (!form) {
    //             throw new Error('Верните форму на место!!!');
    //         }
    //         form.addEventListener('submit', (e) => {
    //             e.preventDefault();
    //             statusBlock.textContent = '';
    //             submitForm(form[0]);


    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    // formListener(form[0]);
    // formListener(form2, someElement2);
    




};
export default form;