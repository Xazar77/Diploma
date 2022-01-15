

const modalFroze = () => {
    
    const serviceButton = document.querySelectorAll('.service-button'),
        modal = document.querySelector('.services-modal'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.services-modal__close');
   

    serviceButton.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });











};
export default modalFroze;