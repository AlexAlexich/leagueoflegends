window.onload = function() {
   
    
    document.querySelector("#signupButton").addEventListener("click", provera);
    document.querySelector("#singinButton").addEventListener("click", provera2);
  
}

//provera sign up-a
function provera() {

    let Podaci = [];
    let ime = document.querySelector("#userName1");
    let prezime = document.querySelector("#userSurname");
    console.log(prezime.value);
    let email = document.querySelector('#userEmail');
    let pol = document.getElementsByName("gender");
    let username = document.querySelector('#userUserName');
    console.log(username.value);
    let password = document.querySelector("#sifra");
    console.log(password.value);
    let checkImePrezime = /^[A-Z][a-z]{2,30}/;
    let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let checkUsername = /^[A-Za-z][A-Za-z0-9]{2,30}/;
    let checkPass = /^([A-Z])+([A-Za-z0-9]{7,30})$/;


    if (!checkImePrezime.test(ime.value)) {
        document.querySelector('.greskaIme').classList.remove("hide");
        document.querySelector('.greskaIme').innerHTML = 'Name is not in correct form. Example : "Aleksandar"'
    } else {
        document.querySelector('.greskaIme').classList.add("hide");
        document.querySelector('.greskaIme').innerHTML = ''
        Podaci.push(ime.value)
    }
    if (!checkImePrezime.test(prezime.value)) {
        document.querySelector('.greskaPrezime').classList.remove("hide");
        document.querySelector('.greskaPrezime').innerHTML = 'Surname is not in correct form. Example : "Aleksic"';
    } else {
        document.querySelector('.greskaPrezime').classList.add("hide");
        document.querySelector('.greskaPrezime').innerHTML = '';
        Podaci.push(prezime.value)
    }
    if (!checkUsername.test(username.value)) {
        
        document.querySelector('.greskaUsername').classList.remove("hide");
        document.querySelector('.greskaUsername').innerHTML = 'Username is not correct,you can use capital letters,small leters and number only and must have atleast 3 characters';
    } else {
        

        document.querySelector('.greskaUsername').classList.add("hide");
        document.querySelector('.greskaUsername ').innerHTML = '';
        Podaci.push(username.value);
        
    }
    if (!checkEmail.test(email.value)) {
        document.querySelector('.greskaEmail').classList.remove("hide");
        document.querySelector('.greskaEmail').innerHTML = 'Email is not in correct form. Example : "something@someProvider.(correct dommen from 2-5)"'
    } else {
        document.querySelector('.greskaEmail').classList.add("hide");
        document.querySelector('.greskaEmail').innerHTML = ''
        Podaci.push(email.value)
    }
    if (!checkPass.test(password.value)) {
        document.querySelector(".greskaPass").classList.remove("hide");
        document.querySelector(".greskaPass").innerHTML = "Password is not correct in correct form.Pasword must have first capital letters, small letters and numbers. Must have atleast 8 characters"
    } else {
        document.querySelector(".greskaPass").classList.add("hide");
        document.querySelector(".greskaPass").innerHTML = " ";
        Podaci.push(password.value)
    }

    let odabraniPol = "";
    for (let i = 0; i < pol.length; i++) {
        if (pol[i].checked) {
            odabraniPol = pol[i].value;
            break;
        }
    }
    if (odabraniPol == "") {
        document.querySelector('#polGreska').classList.remove("hide");
        document.querySelector("#polGreska").innerHTML = "You did not chose gender";

    } else {
        document.querySelector('#polGreska').classList.add("hide");
        document.querySelector("#polGreska").innerHTML = "";
        Podaci.push(odabraniPol);
    }
    if(checkImePrezime.test(ime.value) && checkImePrezime.test(prezime.value) && checkUsername.test(username.value)&&checkEmail.test(email.value)&&checkPass.test(password.value)&&(odabraniPol!="")) {
        alert("Sign up succeed");
        ime.value="";
        prezime.value="";
        email.value="";
        password.value="";
        username.value="";
        for(let i=0;i<pol.length;i++){
            if(pol[i].checked) pol[i].checked=false;
        }
}
}

//provera sign in-a
function provera2() {

    let podaci = [];
    let ime = document.querySelector("#userUserName1");
    console.log(ime.value);
    let password = document.querySelector(".userPassLogin")
    console.log(password.value);
    let checkIme =  /[A-Za-z][A-Za-z0-9]{2,30}/;
    let checkPass = /^[A-Za-z0-9]{8,30}/;
    if (!checkIme.test(ime.value)) {
        document.querySelector(".greskaUsernameSingIn").classList.remove("hide");
        document.querySelector(".greskaUsernameSingIn").innerHTML = "Username is not correct.";
    }
     else {
        document.querySelector(".greskaUsernameSingIn").classList.add("hide");
        document.querySelector(".greskaUsernameSingIn").innerHTML = "";
        podaci.push(ime.value);
    }
    if (!checkPass.test(password.value)) {
        document.querySelector(".greskaPassSignIn").classList.remove("hide");
        document.querySelector(".greskaPassSignIn").innerHTML = "Password is not correct";
    } 
    else {
        document.querySelector(".greskaPassSignIn").classList.add("hide");
        document.querySelector(".greskaPassSignIn").innerHTML = "";
        podaci.push(password.value);
    }

     if(checkIme.test(ime.value) && checkPass.test(password.value)){
       alert("Log in succeed");
        ime.value="";
        password.value="";
   }

}