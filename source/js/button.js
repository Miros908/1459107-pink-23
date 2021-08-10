let button1 = document.querySelector(".comments__button-1");
let button2 = document.querySelector(".comments__button-2");
let button3 = document.querySelector(".comments__button-3");
let button4 = document.querySelector(".offer__button-1");
let button5 = document.querySelector(".offer__button-2");
let button6 = document.querySelector(".offer__button-3");

let offer1 = document.querySelector(".offer__head-1");
let offer2 = document.querySelector(".offer__head-2");

let offer3 = document.querySelector(".offer__head-3");


let check1 = document.querySelector(".offer__table-check-1");
let check2 = document.querySelector(".offer__table-check-2");
let check3 = document.querySelector(".offer__table-check-3");




button1.addEventListener("click", function() {
    button1.classList.add("comments__button--active");
    button2.classList.remove("comments__button--active");
    button3.classList.remove("comments__button--active");
});


button2.addEventListener("click", function() {
    button2.classList.add("comments__button--active");
    button1.classList.remove("comments__button--active");
    button3.classList.remove("comments__button--active");
});

button3.addEventListener("click", function() {
    button3.classList.add("comments__button--active");
    button2.classList.remove("comments__button--active");
    button1.classList.remove("comments__button--active");
})


button4.addEventListener("click", function() {
    button4.classList.add("offer__button--active");
    button5.classList.remove("offer__button--active");
    button6.classList.remove("offer__button--active");
    offer1.classList.remove("offer__head--hidden");
    offer2.classList.add("offer__head--hidden");
    offer3.classList.add("offer__head--hidden");
    check2.classList.add("offer-table__no");
    check3.classList.add("offer-table__no");
});

button5.addEventListener("click", function() {
    button5.classList.add("offer__button--active");
    button4.classList.remove("offer__button--active");
    button6.classList.remove("offer__button--active");
    offer2.classList.remove("offer__head--hidden");
    offer1.classList.add("offer__head--hidden");
    offer3.classList.add("offer__head--hidden");
    check2.classList.remove("offer-table__no");
    check3.classList.add("offer-table__no");
});

button6.addEventListener("click", function() {
    button6.classList.add("offer__button--active");
    button5.classList.remove("offer__button--active");
    button4.classList.remove("offer__button--active");
    offer3.classList.remove("offer__head--hidden");
    offer2.classList.add("offer__head--hidden");
    offer1.classList.add("offer__head--hidden");
    check3.classList.remove("offer-table__no");
    check2.classList.remove("offer-table__no");
});