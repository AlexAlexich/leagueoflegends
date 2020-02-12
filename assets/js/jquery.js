 $(document).ready(function() { //scroll to top
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
 })