

const modalRequest = () => {
    
    const btnBlock = document.querySelector('.btn-block'),
        headerModal = document.querySelector('.header-modal'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelector('.header-modal__close');
       
    

    btnBlock.addEventListener('click', () => {
        headerModal.style.display = 'block';
        overlay.style.display = 'block';
        
    });

    function closeModal() {
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    }

    btnClose.addEventListener('click', closeModal);

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
export default modalRequest;