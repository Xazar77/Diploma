

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

    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);
    



    document.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        });








};
export default modalFroze;