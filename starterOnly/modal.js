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
const confirmation = document.getElementById("confirmation");
const cityDiv = document.getElementById("city-checkbox");

// Error message for each scenario
const messageErreurPrenom = "Vous devez indiqué votre prénom, il doit contenir au moins 2 lettres";
const messageErreurNom = "Vous devez indiqué votre nom, il doit contenir au moins 2 lettres";
const messageErreurNbTournoi = "Vous devez indiquer le nombre de tournoi auxquels vous avez déjà participé";
const messageErreurMail = "Vous devez renseigner une adresse mail valide";
const messageErreurDate = "Votre âge doit être compris entre 10 et 100 ans";
const messageErreurCity = "Vous devez selectionner une ville";
const messageErreurCondition = "Vous devez accepter les conditions";

// regex for Validation
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const dateRegEd = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

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

// add specific layout if an input isn't valid
function notValid(input, spanNumber, message) {
    error[spanNumber].style.display = "block";
    input.style.border = "2px solid red";
    input.style.animation = "nop 0.2s 3";
    error[spanNumber].innerHTML = message;
    validationState.push(false);
}

// Remove specific layout once an input is valid
function isValid(input, spanNumber) {
    error[spanNumber].style.display = "none";
    input.style.border = "none";
    validationState.push(true);
}

function radioState() {
    for (i in checkValidation) {
        checkRadioValidation.push(checkValidation[i].checked);
    }
}

function inputValidation(input, type, spanNumber, message) {
    if (type == "text") {
        if (input.value == "" || input.value.length < 2) {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
    } else if (type == "number") {
        if (input.value == "") {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
    } else if (type == "checkbox") {
        if (input.checked == false) {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
        return false;
    } else if (type == "mail") {
        if (input.value == "" || !input.value.match(emailRegEx)) {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
    } else if (type == "city") {
        radioState();
        if (!checkRadioValidation.includes(true)) {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
    } else if (type == "date") {
        let userDate = Date.parse(new Date(birthdate.value));
        if (input.value == "" || userDate < -1514764800000 || userDate > 1356912000000) {
            notValid(input, spanNumber, message);
        } else {
            isValid(input, spanNumber);
        }
    }
}

// check if every input is valid and prevent submission if on element isn't valid
let validation = false;
myForm.addEventListener("submit", function (e) {
    checkRadioValidation = [];
    validationState = [];
    inputValidation(firstName, "text", 0, messageErreurPrenom);
    inputValidation(lastName, "text", 1, messageErreurNom);
    inputValidation(email, "mail", 2, messageErreurMail);
    inputValidation(birthdate, "date", 3, messageErreurDate);
    inputValidation(nbTournoi, "number", 4, messageErreurNbTournoi);
    inputValidation(cityDiv, "city", 5, messageErreurCity);
    inputValidation(condition, "checkbox", 6, messageErreurCondition);
    if (!validationState.includes(false)) {
        validation = true;
        return true;
    } else {
        e.preventDefault();
    }
});
console.log(validation);
// confirmation.style.display = "block";
// confirmation.style.animation = "confirmation 5s ease-in-out both";
