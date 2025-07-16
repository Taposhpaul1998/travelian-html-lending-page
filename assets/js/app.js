
// header sticky 
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("header__sticky");
    } else {
        header.classList.remove("header__sticky");
    }
});

// hendle hamberger toggle event 
const toggleMobile = document.querySelector('#toggle-mobile');
const mobileMenu = document.querySelector('.mobile__nav');
const closeBtn = document.querySelector('.close__btn')

toggleMobile.addEventListener("click", () => {
    mobileMenu.classList.toggle('active__mobile')
})

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove('active__mobile')
})