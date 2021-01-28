 //ispis menija
    var list = document.getElementById("meni")
    var sub = ["About game", "Tournemnts", "About me", "Login"]
    var list1 = ["index.html", "tournaments.html", "about.html", "login.html", "navigacija.pdf"]
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
    //Ispis navigacije
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
   
  