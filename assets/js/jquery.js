$(document).ready(function() {
  //scroll to top
     $("#scrollTop").click(function() {

         $("html").animate({
             scrollTop: 0
         }, 1500);
     });

     $("#scrollTop").hide();
     $(window).scroll(function() {
         let top = $(this)[0].scrollY;

         if (top > 500) {
             $("#scrollTop").show();
         } else {
             $("#scrollTop").hide();
         }
     })
     $("#meni li a").hover(rast, smanjenje)
     $("#hamburger").click(function() {
         let vidljiv = $("#hamburgerLista").is(":visible");
         if (vidljiv) {
             $("#hamburgerLista").css("display", "none")
         } else {
             $("#hamburgerLista").css("display", "block")
         }
     })
     var test=['#buttonTour1','#buttonTour2','#buttonTour3','#buttonTour4'];
    var test1=['#showHide1','#showHide2','#showHide3','#showHide4'];


    for(let i = 0;i<test.length;i++){
        $(test[i]).click(function() {
            $(test1[i]).toggle('slow');
    
            if ($(test1[i]).is(':visible')) {
                $(this).setAttribute('class', 'hide');
            } else {
                $(this).setAttribute('class', '');
            }
        });
        
    }
 })
 

 $(".project img").hover(promeneSlika, vracanjeSlika)


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

function promeneSlika() {
    $(this).animate({
        fontSize: "+=10px",
        padding: '+=20px',
    }, 200);
    $(this).addClass('border')
    $(this).stop(true, true);
}

function vracanjeSlika() {
    $(this).animate({
        fontSize: "-=10px",
        padding: '-=20px',

    }, 200);
    $(this).removeClass('border')
    $(this).stop(true, true);
}