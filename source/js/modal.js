let form = document.querySelector(".client-info__form");
let names = document.querySelector("[name=name]");
let secondname = document.querySelector("[name=second-name]");
let patronymic = document.querySelector("[name=patronymic]");
let number = document.querySelector("[name=numbers]");
let email = document.querySelector("[name=email]");
let modalerror = document.querySelector(".modal__error");
let formsent = document.querySelector(".modal__form-sent");
let modalbutton = document.querySelector(".modal__button")
let modalbuttonsent = document.querySelector(".modal__button-sent")


form.addEventListener("submit", function(evt) {
    if (!names.value || !email.value || !patronymic.value || !number.value || !secondname.value) {
        evt.preventDefault();

        modalerror.classList.remove("visually-hidden");


    } else { formsent.classList.remove("visually-hidden"); }

    evt.preventDefault();
});





modalbutton.addEventListener("click", function() {

    modalerror.classList.add("visually-hidden");

})
modalbuttonsent.addEventListener("click", function() {

    formsent.classList.add("visually-hidden");

})
