

const modalRequest = () => {
    
    const btnBlock = document.querySelector('.btn-block'),
        headerModal = document.querySelector('.header-modal'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelector('.header-modal__close');
    // console.log(btnClose);
    

    btnBlock.addEventListener('click', () => {
        headerModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    btnClose.addEventListener('click', () => {
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    });














};
export default modalRequest;