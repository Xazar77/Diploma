
const smoothScroll = () => {

    const scrollBtn = document.querySelector('.smooth-scroll');
    scrollBtn.style.display = 'none';  
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 400) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
   
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
       
        document.getElementById('header').scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
        
        
    });
  

};
export default smoothScroll;