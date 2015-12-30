$(document).ready(function() {
   var $linkerzijde = (window.innerWidth - 1120)/2;
   var spiralenX = 100;
   var koptekstX = 0;
   var taglineX = 0;
   var $muisX = 0;
   
   $('body').mousemove(function() {
      $muisX = (event.pageX - $linkerzijde);
   })
   
  function beweeg() {
   spiralenX = spiralenX + ($muisX/7 - spiralenX)/20;
   koptekstX = koptekstX + ($muisX/6 - koptekstX)/20 ;
   taglineX = taglineX + ($muisX/5 - taglineX)/20;
   $("header").css("background-position", spiralenX/2);
   $("#kopachtergrond").css("left", spiralenX);
   $("h1").css("left", koptekstX);
   $("#tagline").css("left", taglineX);
  }
   herhaal = setInterval(function() {beweeg()}, 10);
  
})