

const sertificate = () => {

    
    const sertificateDocument = document.querySelectorAll('.sertificate-document');
    const overlayDoc = document.querySelectorAll('.document-overlay');

    let overlayOpened = false;
    
    sertificateDocument.forEach(img => {
        img.addEventListener('mouseover', (e) => {
            e.preventDefault()
            img.classList.add('document-inner');
            
        });
        img.addEventListener('mouseout', (e) => {
            e.preventDefault()
            img.classList.remove('document-inner');
         
        });
    });
    sertificateDocument.forEach((elem, index) => {
      
        const image = elem.querySelector('img');
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if (!overlayOpened) {
                overlayOpened = true;
                overlayDoc[index].style.cssText = `
                    background: black;
                    position: fixed;
                    z-index: 1;
                    width: 100vw;
                    height: 100vh;
                    opacity: 0.7;
                `;
            } else {
                overlayOpened = false;
                overlayDoc[index].style.cssText = `
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    opacity: 0;
                `;
            }

            if (e.target.closest('.col-sm-4')) {
                if (overlayOpened) {
                    image.src = "images/documents/original/document4.jpg";
                    image.style.cssText = `
                       
                        position: fixed;
                        z-index: 2;
                        height: 90vh;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        object-fit: contain;
                        max-width: 90vw;
                    `;
                } else {
                    image.src = "images/documents/document4.jpg";
                    image.style.cssText = `
                        position: relative;
                        z-index: 0;
                    `;
                }

               
            }
           

        });

   
    }); 



    




};

export default sertificate;