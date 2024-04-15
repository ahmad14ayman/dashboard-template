let formButton = document.querySelector(".form-button");
let fnInput = document.querySelector("input[placeholder='First Name']");
let lnInput = document.querySelector("input[placeholder='Last Name'");
let emailInput = document.querySelector("input[type='email']");

formButton.onclick = function () {
    emailInput.toggleAttribute("readonly");
    fnInput.toggleAttribute("readonly");
    lnInput.toggleAttribute("readonly");
    emailInput.style.cursor = "default";
    emailInput.style.backgroundColor = "white";
    if (formButton.textContent === "Change")
        formButton.textContent = "Save";
    else
        formButton.textContent = "Change";

    if(emailInput.hasAttribute("readonly")){
        emailInput.style.cursor = "no-drop";
        fnInput.style.cursor = "no-drop";
        lnInput.style.cursor = "no-drop";
    }
    else{
        emailInput.style.cursor = "default";
        fnInput.style.cursor = "default";
        lnInput.style.cursor = "default";
    }
}

let passChaingDate = document.querySelector(".passChaingDate");
let date = new Date();
    let day = date.getDate()-1;
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    let dateStr =  `${day}/${month}/${year}`;

    passChaingDate.textContent = dateStr;
