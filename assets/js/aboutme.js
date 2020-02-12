window.onload = function() {

    //ispis menija
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
        //
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
    // ispis texta u about me stranici
    var divText = document.getElementById("textAbout")
    var pAutor = document.createElement("p")
    pAutor.innerHTML = "My name is Aleksandar, and I'm an IT student. I was born in Loznica, western Serbia, but currently I live and study in Belgrade. My current occupations are rugby and coding.I used to play League of Legends before and was Diamond V Rank"
    divText.appendChild(pAutor);



    document.querySelector("#buttonProvera").addEventListener("click", provera3)
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
}