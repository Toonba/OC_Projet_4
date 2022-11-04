function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbTournoi = document.getElementById("quantity");
const submitBtn = document.querySelector(".btn-submit");
const myForm = document.getElementById("myForm");
const error = document.getElementsByClassName("error");
const checkValidation = document.getElementsByClassName("check-validation");
const condition = document.getElementById("checkbox1");
const confirmation = document.getElementsByClassName("confirmation");
const myInput = myForm.getElementsByTagName('input'); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// addd specific layout if an input isn't valid
function notValid(input, spanNumber, message) {
    error[spanNumber].style.display = "block";
    input.focus();
    input.style.border = "2px solid red";
    input.style.animation = "nop 0.2s 3";
    error[spanNumber].innerHTML = message;
}

function isValid(input, spanNumber) {
    error[spanNumber].style.display = "none";
    input.style.border = "none";
}

let validationState = false;
function inputValidation(input, type, spanNumber, message) {
    input.addEventListener("blur", function (e) {
        if (type == "text") {
            if (input.value == "" || input.value.length < 2) {
                notValid(input, spanNumber, message);
                validationState = false;
            } else {
                isValid(input, spanNumber);
                validationState = true;
            }
        } else if (type == "number") {
            if (input.value == "") {
                notValid(input, spanNumber, message);
                validationState = false;
            } else {
                isValid(input, spanNumber);
                validationState = true;
            }
        } else if (type == "checkbox") {
            if (input.checked == false) {
                notValid(input, spanNumber, message);
                validationState = false;
            } else {
                validationState = true;
            }
            return false;
        } else if (type == "mail") {
            if (input.value == "") {
                notValid(input, spanNumber, message);
                validationState = false;
            } else {
                isValid(input, spanNumber);
                validationState = true;
            }
        }
    });
}
const messageErreurPrenom = "Vous devez indiqué votre prénom, il doit contenir au moins 2 lettres";
const messageErreurNom = "Vous devez indiqué votre nom, il doit contenir au moins 2 lettres";
const messageErreurNbTournoi = "Vous devez indiquer le nombre de tournoi auxquels vous avez déjà participé";

inputValidation(firstName, "text", 0, messageErreurPrenom);
inputValidation(lastName, "text", 1, messageErreurNom);
inputValidation(email, "mail", 2, "Vous devez renseigner une adresse mail valide");
inputValidation(nbTournoi, "number", 4, messageErreurNbTournoi);
inputValidation(condition, "checkbox", 6, "Vous devez accepter les conditions");

function formValidation() {
    if (firstName.value == "" || firstName.value.length < 2) {
        notValid(firstName, 0, "Vous devez indiqué votre prénom, il doit contenir au moins 2 lettres");
        return false;
    } else if (lastName.value == "" || lastName.value.length < 2) {
        notValid(lastName, 1, "Vous devez indiqué votre nom, il doit contenir au moins 2 lettres");
        isValid(firstName, 0);
        return false;
    } else if (nbTournoi.value == "") {
        error[4].style.display = "block";
        error[3].style.display = "none";
        error[4].innerHTML = "Vous devez indiquer le nombre de tournoi auxquels vous avez déjà participé";
        return false;
    } else if (
        document.getElementById("location1").checked == false &&
        document.getElementById("location2").checked == false &&
        document.getElementById("location3").checked == false &&
        document.getElementById("location4").checked == false &&
        document.getElementById("location5").checked == false &&
        document.getElementById("location6").checked == false
    ) {
        error[5].style.display = "block";
        error[4].style.display = "none";
        error[5].innerHTML = "Vous devez selectionner une ville";
        return false;
    } else if (condition.checked == false) {
        error[6].style.display = "block";
        error[5].style.display = "none";
        error[6].innerHTML = "Vous devez accepter les conditions";
        return false;
    } else if (birthdate.value.validity.valid == false) {
        error[3].style.display = "block";
        error[2].style.display = "none";
        error[3].innerHTML = "Vous devez renseigner une date de naissance valide";
        return false;
    } else if (email.value == "" || email.value.validity.valid == fasle) {
        error[2].style.display = "block";
        error[1].style.display = "none";
        error[2].innerHTML = "Vous devez renseigner une adresse mail valide";
        notValid(email);
        return false;
    } else {
        return true;
    }
}

// check if every input is valid
myForm.addEventListener("submit", function (e) {
    if (validationState == false) {
        e.preventDefault();
    } else {
        confirmation[0].style.animation = "confirmation 5s ease-in-out both running";
    }
});
