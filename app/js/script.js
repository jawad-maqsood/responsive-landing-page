const hamburger = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header-menu")

hamburger.addEventListener('click', () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        headerMenu.classList.remove("move-in");
        headerMenu.classList.add("move-out");
        overlay.classList.add('fade-out');
    } else {
        header.classList.add("open");
        overlay.classList.remove('fade-out');
        headerMenu.classList.remove('move-out');
        headerMenu.classList.add("move-in");
        overlay.classList.add('fade-in');
    }
})