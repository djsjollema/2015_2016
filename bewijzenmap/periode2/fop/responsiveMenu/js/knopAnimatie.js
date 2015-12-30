$(document).ready(function() {
    $('nav a').hover(function() {
        $(this).animate({"padding-top":"20px"}, 1000);
    },
    function() {
        $(this).animate({"padding-top":"0px"}, 1000);
    }
    )
    })