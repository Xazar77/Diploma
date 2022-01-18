

const sertificate = () => {

    const sertificate = document.querySelectorAll('.text-center .col-sm-4');
    const sertificateDocument = document.querySelectorAll('.sertificate-document');
    const overlayDoc = document.querySelectorAll('.document-overlay');
    const imgOverlay = document.querySelectorAll('.img-responsive');
    let overlayOpened = false;
    // console.log(sertificate)

    // sertificateDocument.forEach(img => {
    //     img.addEventListener('mouseover', (e) => {
    //         e.preventDefault()
    //         // console.dir(img)
    //         // if (overlayOpened) {
    //         //     img.style.opacity = 1;
    //         // }
    //         // if (e.target.closest('.img-responsive')) {
    //             // console.log(e.target)
    //         // }
    //         img.style.background = 'rgba(0,0,0,0.5)';
    //         // 
    //         // img.style.overflow = 'hidden';
            
    //     });
    //     img.addEventListener('mouseout', (e) => {
    //         e.preventDefault()
    //         // if (e.target.closest('.img-responsive')) {
    //             // img.style.opacity = 0;
    //             // img.style.overflow = 'hidden'
    //             // console.log(e.target)
    //             img.style.background = 'rgba(255,255,255,0.5)';
    //         // }
    //     });
    // });
    sertificateDocument.forEach((elem, index) => {
      
        const image = elem.querySelector('img'); 
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if(!overlayOpened) {
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
                if(overlayOpened) {
                    image.src = "images/documents/original/document4.jpg";
                    image.style.cssText = `
                        position: fixed;
                        z-index: 2;
                        top: -100px;
                        left: 30%;
                        transform: scale(0.8);
                    `;
                }else{
                    image.src = "images/documents/document4.jpg";
                    image.style.cssText = `
                        position: relative;
                        z-index: 0;
                    `;   
                }

               
            } 
            // if (!overlayOpened) {
            //     elem.addEventListener('mouseover', () => {
            //         elem.style.background = 'rgba(0,0,0,0.5)';
            //     });
            // }

        });

        // elem.addEventListener('mouseout', (e) => {
        //     e.preventDefault();
//  console.log('YES');
        //     if (e.target.closest('.col-sm-4')) {
               
                
        //         console.log('NO');
        //     } 

        // });
    }) 



    




};

export default sertificate;