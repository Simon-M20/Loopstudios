const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link')
console.log(menuBtn);

document.addEventListener("click", e => {
    if (e.target === menuBtn) {
        // console.log(e.target);
        menu.classList.toggle('show');
        menuBtn.classList.toggle('is-active')
    }
})

menuLink.forEach(el => {
    el.addEventListener('click', e => {
        console.log(e.target);
        menu.classList.remove('show');
        menuBtn.classList.remove('is-active')
    })
})