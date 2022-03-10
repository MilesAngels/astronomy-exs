$(document).ready(function(){
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(100);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
    });
}); 

