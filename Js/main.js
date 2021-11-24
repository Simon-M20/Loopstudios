const menuBtn = document.getElementById("menu-btn")

console.log(menuBtn);

document.addEventListener("click", e => {
    if (e.target.matches(menuBtn)) {
        console.log(e.target);
    }
})