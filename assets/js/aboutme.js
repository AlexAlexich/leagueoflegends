window.onload = function() {
    document.querySelector("#buttonProvera").addEventListener("click", provera3)
    
}


function provera3() {
    let Podaci = [];
    let ime = document.querySelector("#userNameAbout");
    let email = document.querySelector('#userEmailAbout');
    let message = document.querySelector('#userMessage');

    let checkIme = /^[A-Z][a-z]{1,14}(\s[A-Z][a-z]{1,14})*$/
    let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!checkIme.test(ime.value)) {
        document.querySelector('#greskaIme').classList.remove("hide");
        document.querySelector('#greskaIme').innerHTML = 'Name is not in correct form. Example : "Aleksandar"'
    } else {
        document.querySelector('#greskaIme').classList.add("hide");
        document.querySelector('#greskaIme').innerHTML = ''
        Podaci.push(ime.value)
    }
    if (!checkEmail.test(email.value)) {
        document.querySelector('#greskaEmailAbout').classList.remove("hide");
        document.querySelector('#greskaEmailAbout').innerHTML = 'Email is not in correct form. Example : "something@someProvider.(correct dommen from 2-5)"'
    } else {
        document.querySelector('#greskaEmailAbout').classList.add("hide");
        document.querySelector('#greskaEmailAbout').innerHTML = ''
        Podaci.push(email.value)
    }
    if (message.value.length < 10) {
        document.querySelector('#greskaMess').classList.remove("hide");
        document.querySelector('#greskaMess').innerHTML = 'Message is to short. Min number of characters is 10!'
    } else {
        document.querySelector('#greskaMess').classList.add("hide");
        document.querySelector('#greskaMess').innerHTML = ''
        Podaci.push(message.value)
    }

    if((checkIme.test(ime.value)) && (checkEmail.test(email.value)) && (message.value.length > 10)){
        ime.value="";
        email.value="";
        message.value="";
        alert("Message succesfully sent");
    }
}