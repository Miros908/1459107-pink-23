let button = document.querySelector(".main-nav__toggle");
let header = document.querySelector(".header");
let list = document.querySelector(".main-nav__list");

button.classList.remove("main-nav__toggle--close");
button.classList.add("main-nav__toggle--open");
header.classList.remove("header__open-menu");
list.classList.remove("main-nav__list--open");

button.addEventListener("click", function() {
    list.classList.toggle("main-nav__list--open");
    header.classList.toggle("header__open-menu");
    button.classList.toggle("main-nav__toggle--open");
    button.classList.toggle("main-nav__toggle--close");

})