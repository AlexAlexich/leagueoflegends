//dodavanje slika u turnire
var imeSlike=["slikaPrva","slikaDruga","slikaTreca","slika4"];
var linkSlike=["assets/images/lcs.jpg","assets/images/lec.jpg","assets/images/lck.jpg","assets/images/lpl.jpg"];
var altSlike=["LCS Turnir","LEC Turnir","LCK Turnir","LPL Turnir"];

    for(let i=0;i<imeSlike.length;i++){
        let z = document.getElementById(imeSlike[i]);
        let m = document.createElement("img");
        m.setAttribute('src',linkSlike[i]);
        m.setAttribute('alt', altSlike[i]);
        m.setAttribute('class', 'turnir show');
        z.appendChild(m);
    }
//dodosavanje galerije
var Galery = ["assets/images/lcs2.jpg", "assets/images/lcs3.jpg", "assets/images/lec2.jpg", "assets/images/lec3.jpg", "assets/images/lck2.jpg", "assets/images/lck3.jpg", "assets/images/lpl2.jpg", "assets/images/lpl3.jpg" ];
var GaleryAlt=["LCS","LCS","LEC","LEC","LCK","LPL","LPL"];
var hm = document.querySelector("#galleryFlex");
    
for(let i=0;i<GaleryAlt.length;i++){
        let q = document.createElement("figure");
        let c = document.createElement("figcaption");
        let b = document.createElement("img");
        q.setAttribute('class',"project");
        
        b.setAttribute('src',Galery[i]);
        console.log(GaleryAlt[i]);
        c.innerHTML=GaleryAlt[i];
        b.setAttribute('alt', GaleryAlt[i]);
        q.appendChild(b);
        q.appendChild(c);
        hm.appendChild(q);
}
