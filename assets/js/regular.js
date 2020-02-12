window.onload = function() {
    var list = document.getElementById("meni")
    var sub = ["About game", "Tournemnts", "About me", "Login"]
    var list1 = ["index.html", "tournaments.html", "about.html", "login.html"]
    for (var i = 0; i < sub.length; i++) {
        x = sub[i]
        var y = document.createElement("li")
        var z = document.createElement("a")
        y.appendChild(z)
        z.setAttribute("href", `${list1[i]}`)
        z.innerHTML = x
        list.appendChild(y)
    }
    var bzzz = document.createElement("li")
    bzzz.setAttribute("id", "hamburger")
    var kjk = document.createElement("i")
    kjk.setAttribute("class", "fa fa-bars")
    bzzz.appendChild(kjk)
    list.appendChild(bzzz)
    var list22 = this.document.querySelector('#hamburgerLista ul')
    for (var i = 0; i < sub.length; i++) {
        x = sub[i]
        var y = document.createElement("li")
        var z = document.createElement("a")
        y.appendChild(z)
        z.setAttribute("href", `${list1[i]}`)
        z.innerHTML = x
        list22.appendChild(y)
    }
    //Ispis navigaccije
    var list2 = document.getElementById("navigacija")
    var sub2 = ["About game", "Tournemnts", "About me", "Login", "Dokumentacija"]
    var lista2 = ["index.html", "tournaments.html", "about.html", "login.html", "Dokumentacija.pdf"]
    for (var i = 0; i < sub2.length; i++) {
        x = sub2[i]
        var y = document.createElement("li")
        var z = document.createElement("a")
        y.appendChild(z)
        z.innerHTML = x
        z.setAttribute("href", `${lista2[i]}`)
        list2.appendChild(y)
    }
    document.querySelector("#signupButton").addEventListener("click", provera);
    document.querySelector("#singinButton").addEventListener("click", provera2)
    $("#meni li a").hover(rast, smanjenje)

}

function rast() {

    $(this).animate({
        fontSize: "+=7px",
        paddingLeft: '+=15px'
    }, 200);

    $(this).stop(true, true);
}

function smanjenje() {
    $(this).animate({
        fontSize: "-=7px",
        paddingLeft: '-=15px'
    }, 200)

    $(this).stop(true, true)
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
    let password = document.querySelector("#sifra")
    console.log(password.value);
    let checkImePrezime = /^[A-Z][a-z]{1,14}/
    let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    let checkUsername = /[A-Z][a-z][0-9]{1,14}$/
    let checkPass = /[A-Z][a-z][0-9]{1,14}$/

    if (!checkImePrezime.test(ime.value)) {
        console.log(ime.value)
        document.querySelector('.greskaIme').classList.remove("hide");
        document.querySelector('.greskaIme').innerHTML = 'Name is not in correct form. Example : "Aleksandar"'
    } else {
        document.querySelector('.greskaIme').classList.add("hide");
        document.querySelector('.greskaIme').innerHTML = ''
        Podaci.push(ime.value)
    }
    if (!checkImePrezime.test(prezime.value)) {
        document.querySelector('.greskaPrezime').classList.remove("hide");
        document.querySelector('.greskaPrezime').innerHTML = 'Surname is not in correct form. Example : "Aleksic"'
    } else {
        document.querySelector('.greskaPrezime').classList.add("hide");
        document.querySelector('.greskaPrezime').innerHTML = ''
        Podaci.push(prezime.value)
    }
    if (!checkUsername.test(username.value)) {
        document.querySelector('.greskaUsername').classList.remove("hide");
        document.querySelector('.greskaUsername').innerHTML = 'Username is not correct!'
    } else {
        document.querySelector('.greskaUsername').classList.add("hide");
        document.querySelector('.greskaUsername ').innerHTML = ''
        Podaci.push(username.value)
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
        document.querySelector(".greskaPass").innerHTML = "Password is not correct in correct form."
    } else {
        document.querySelector(".greskaPass").classList.add("hide");
        document.querySelector("#sifra1").innerHTML = ""
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
}
//provera about



//provera sign in-a
function provera2() {

    let podaci = [];
    let ime = document.querySelector("#userUserName");
    let password = document.getElementsByName("userPassLogin")
    let checkIme = /^[A-Z][a-z][0-9]{1,14}$/
    let checkPass = /^[A-Z][a-z][0-9]{1,14}$/
    if (!checkIme.test(ime.value)) {
        document.querySelector(".greskaUsernameSingIn").classList.remove("hide");
        document.querySelector(".greskaUsernameSingIn").innerHTML = "Username is not correct"
    } else {
        document.querySelector(".greskaUsernameSingIn").classList.add("hide");
        document.querySelector(".greskaUsernameSingIn").innerHTML = ""
        podaci.push(ime.value)
    }
    if (!checkPass.test(password.value)) {
        document.querySelector(".greskaPassSignIn").classList.remove("hide");
        document.querySelector(".greskaPassSignIn").innerHTML = "Password is not correct"
    } else {
        document.querySelector(".greskaPassSignIn").classList.add("hide");
        document.querySelector(".greskaPassSignIn").innerHTML = ""
        podaci.push(password.value)
    }

}