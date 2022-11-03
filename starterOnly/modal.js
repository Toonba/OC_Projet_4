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
function notValid(input) {
    input.focus();
    input.style.border = "2px solid red";
    input.style.animation = "nop 0.2s 3";
}

// check if every input is valid
myForm.addEventListener("submit", function (e) {
    if (firstName.value == "" || firstName.value.length < 2) {
        e.preventDefault();
        error[0].innerHTML = "Vous devez indiqué votre prénom, il doit contenir au moins 2 lettres";
        notValid(firstName);
    } else if (lastName.value == "" || lastName.value.length < 2) {
        error[0].innerHTML = "";
        e.preventDefault();
        error[1].innerHTML = "Vous devez indiqué votre nom, il doit contenir au moins 2 lettres";
        notValid(lastName);
    } else if (nbTournoi.value == "") {
        error[3].innerHTML = "";
        e.preventDefault();
        error[4].innerHTML = "Vous devez indiquer le nombre de tournoi auxquels vous avez déjà participé";
    } else if (
        document.getElementById("location1").checked == false &&
        document.getElementById("location2").checked == false &&
        document.getElementById("location3").checked == false &&
        document.getElementById("location4").checked == false &&
        document.getElementById("location5").checked == false &&
        document.getElementById("location6").checked == false
    ) {
        console.log(document.getElementById("location1").checked);
        console.log("sayhello");
        error[4].innerHTML = "";
        e.preventDefault();
        error[5].innerHTML = "Vous devez selectionner une ville";
    } else if (condition.checked == false) {
        error[5].innerHTML = "";
        e.preventDefault();
        error[6].innerHTML = "Vous devez accepter les conditions";
    } else if (birthdate.value.validity.valid == false) {
        error[2].innerHTML = "";
        e.preventDefault();
        error[3].innerHTML = "Vous devez renseigner une date de naissance valide";
    } else if (email.value == "" || email.value.validity.valid == fasle) {
        error[1].innerHTML = "";
        e.preventDefault();
        error[2].innerHTML = "Vous devez renseigner votre email";
        notValid(email);
    } 
});
