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
    var list22 = this.document.querySelector('#hamburgerMeni')
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
    //dodavanje slika u turnire
    var prvi = document.getElementById("slikaPrva")
    var m = document.createElement("img")
    m.setAttribute('src', "assets/images/lcs.jpg")
    m.setAttribute('alt', "LCK Turnir")
    m.setAttribute('class', 'turnir show')
    prvi.appendChild(m)

    var drugi = document.getElementById("slikaDruga")
    var n = document.createElement("img")
    n.setAttribute('src', "assets/images/lec.jpg")
    n.setAttribute('alt', "LCK Turnir")
    n.setAttribute('class', 'turnir show')
    drugi.appendChild(n)


    var treci = document.getElementById("slikaTreca")
    var z = document.createElement("img")
    z.setAttribute('src', "assets/images/lck.jpg")
    z.setAttribute('alt', "LCK Turnir")
    z.setAttribute('class', 'turnir show')
    treci.appendChild(z)

    var cetvrti = document.getElementById("slika4")
    var s = document.createElement("img")
    s.setAttribute('src', "assets/images/lpl.jpg")
    s.setAttribute('alt', "LPL Turnir")
    s.setAttribute('class', 'turnir show')
    cetvrti.appendChild(s)

    //ispisivanje texta
    var xz = document.getElementById("PrviP")
    xz.innerHTML = "Formerly known as the NA LCS, the LCS is the first competition most English fans tune in to. Now, technically, it is not a tournament. It is a league. That said, leagues play a huge role in the world of League of Legends esports, so it'd be a mistake to dismiss them. The LCS acronym itself stands for the \"League of Legends Championship Series\", and the league itself is the premier LoL esports competition in North America that takes place in Los Angeles, USA."
    var xzz = document.querySelector(".drugiP")
    xzz.innerHTML = " Over the course of the competition, 10 professional teams play in the double round robin format. This means that each team plays twice against every other lineup, and so, for 9 weeks of the regular season, they keep clashing in fierce Bo1 matches. The winners get a point added to their overall score while the losers walk away empty-handed."
    var xzzz = document.querySelector(".treciP")
    xzzz.innerHTML = "Once the regular season ends, 6 teams with the best win/loss record advance to the playoffs, and 2 best-performing lineups get a bye to the Semifinals. The playoffs format shifts towards Bo5s-prolonged series where a team needs to win 3 games to claim victory.  This structure is ideal for betting on League of Legends matches, as all participants get to adjust their strategies to highlight their strengths and cover their weaknesses, so there's less room for an upset compared to Bo1s. The team that crushes all enemies in its path is crowned the LCS champion, receiving the trophy and a sizeable chunk of the prize pool."
    var xzzzz = document.querySelector(".cetvrtiP")
    xzzzz.innerHTML = "Keep in mind that every year has two LCS seasons: Spring Split and Summer Split. And while the Spring Split comes with numerous benefits like Circuit Points, Rift Rivals invitations, and Mid-Seasonal Invitational tickets, it’s the Summer Split that matters the most. Because the three LCS teams that acquire the most Circuit Points by the end of summer, qualify for the largest LoL esports tournament in the scene—the League of Legends World Championship."
    $('#buttonTour1').click(function() {
        $('#showHide1').toggle('slow');

        if ($('#showHide1').is(':visible')) {
            $(this).setAttribute('class', 'hide');
        } else {
            $(this).setAttribute('class', '');
        }
    });
    var xz1 = document.getElementById("prviP2")
    xz1.innerHTML = "Much like its North American cousin, the LEC (or, in the past, the EU LCS) is a league. The acronym stands for “League of Legends European Championship”, and the event itself takes place in Berlin, Germany. The LEC format mirrors that of the LCS, making it easy for viewers to switch between both competitions."
    var xzz1 = document.querySelector("#drugiP2")
    xzz1.innerHTML = "One notable difference is the fact that the LEC has only recently adopted franchising. With that, the league is expected to go through growing pains that come with the implementation of the permanent partnership system, and it might take some time for the LEC to catch up to its North American counterpart."

    $('#buttonTour2').click(function() {
        $('#showHide2').toggle('slow');

        if ($('#showHide2').is(':visible')) {
            $(this).setAttribute('class', 'hide');
        } else {
            $(this).setAttribute('class', '');
        }
    });
    var xz12 = document.getElementById("prviP3")
    xz12.innerHTML = "As you might’ve guessed by this point, the LCK is also a league. However, it’s wildly different from the LCS/LEC. The acronym stands for the “League of Legends Champions Korea”, and the competition takes place in Seoul, South Korea. Once again, the regular season consists of 10 teams playing against each other for 9 weeks of the double round robin format, but the matches themselves take the shape of Bo3s, so LCK teams have to take 2 games to get that W."
    var xzz12 = document.querySelector("#drugiP3")
    xzz12.innerHTML = "The playoffs structure is even more distinct. For one, only 5 teams make the cut, so there’s already one less contender compared to Europe and North America. Not only that but the lineup with the best regular season record automatically secures a bye to the finals. Meanwhile, the second-best team is seeded into the Semifinals, the third-best team qualifies for the Quarters, and the last two teams play in the wildcard round. All matches with the exception of the wildcard round follow the Bo5 format."
    var xzzz12 = document.querySelector("#treciP3")
    xzzz12.innerHTML = "Finally, the LCK participants have to worry about the looming dread of relegation. Two teams with the worst regular season record are knocked down to the Promotion Tournament where they can get eliminated from the league. Teams do everything in their power to avoid this outcome, and the competition is much stiffer as a result."
    $('#buttonTour3').click(function() {
        $('#showHide3').toggle('slow');

        if ($('#showHide3').is(':visible')) {
            $(this).setAttribute('class', 'hide');
        } else {
            $(this).setAttribute('class', '');
        }
    });
    var xz123 = document.getElementById("prviP4")
    xz123.innerHTML = "The LPL is another LoL esports league worth following. The acronym stands for “League of Legends Pro League”, and the competition itself takes place in China. Up until recently, the LPL was overshadowed by the LCK, since the latter was viewed as a much more cutthroat league. However, everything changed when the LPL representatives—Invictus Gaming—claimed the World Championship trophy in 2018."
    var xzzz123 = document.querySelector("#drugiP4")
    xzzz123.innerHTML = "The first thing that stands out about the LPL is its scale. This competition is much bigger than other League of Legends esports events, and it has a total of 16 professional teams fighting against each other in various venues all over China. The regular season lasts for 10 weeks, as each team has to go face its opponents in a Bo3 single round robin format."
    var xzzzz123 = document.querySelector("#treciP4")
    xzzzz123.innerHTML = "Afterwards, 8 best-performing teams advance to the single elimination Bo5 playoffs. It’s worth noting that the top-2 teams advance directly into the semifinals, the third and fourth teams get seeded into the round of 6, and the remaining competitors end up in the round of 8. With that, many squads have to go through hell and high water if they want to get within arm’s reach of the LPL trophy."
    var xzzzzz123 = document.querySelector("#cetvrtiP4")
    xzzzzz123.innerHTML = "Much like the LCS and LEC, the LPL is franchised, so Chinese teams don’t have to worry about relegation. That said, the competition is fierce purely because of the large number of participants and the gigantic player base each of them can tap into. Every team has at least one player that would be considered a superstar in another region. And while not everyone knows how to use them, it still speaks volumes about the level of Chinese League of Legends."
    $('#buttonTour4').click(function() {
        $('#showHide4').toggle('slow');

        if ($('#showHide4').is(':visible')) {
            $(this).setAttribute('class', 'hide');
        } else {
            $(this).setAttribute('class', '');
        }
    });
    $("#meni li a").hover(rast, smanjenje)

    $("#hamburger").click(function() {
            let vidljiv = $("#hamburgerLista").is(":visible");
            if (vidljiv) {
                $("#hamburgerLista").css("display", "none")
            } else {
                $("#hamburgerLista").css("display", "block")
            }
        }

    )
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