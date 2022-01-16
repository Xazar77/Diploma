

const sertificate = () => {

    const sertificateDocument = document.querySelectorAll('.sertificate-document');

    sertificateDocument.forEach(doc => {
        doc.addEventListener('mouseover', () => {
            doc.style.opacity = 1;
            // console.log('YES');
        });
        doc.addEventListener('mouseout', () => {
            doc.style.opacity = 0;
            // console.log('NO');
        });
    });


    




};

export default sertificate;