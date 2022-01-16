

const mobile = () => {
    const menuTag = document.getElementById("navbar-collapse");
    const body = document.querySelector("body");

    body.addEventListener('click', (e) => {
        if (e.target.closest(".navbar-toggle.collapsed")){
            menuTag.classList.toggle("collapse");
        }});
};
export default mobile;