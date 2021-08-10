let button = document.querySelector(".main-nav__toggle");
let header = document.querySelector(".header");
let list = document.querySelector(".main-nav__list");


button.addEventListener("click", function() {
    button.classList.toggle("main-nav__toggle--close");
    list.classList.toggle("main-nav__list--open");
    header.classList.toggle("header__open-menu");
});