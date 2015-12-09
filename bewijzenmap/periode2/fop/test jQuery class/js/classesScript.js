$(document).ready(startenMaar);

function startenMaar() {
   // weghalen en toevoegen van een class
   $('section').hover(function(){
      $(this).addClass('actief').siblings().removeClass('actief');
   });
   
}

