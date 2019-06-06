//waits until page is loaded first
$(document).ready(function(){
    $("p").click(function(){
        $(this).children('a').addClass("highlight-links");
    });
    
    $('.card_image').click(function() {
        $(this).next().next('p').slideDown();
    });
    
    $('.card').click(function() {
        $(this).toggleClass('highlight-card');
    });
    
    $('#select_btn').click(function() {
        $('.card:not(.highlight-card)').hide();
    });
    
    $('#all_btn').click(function() {
        $('.card').show();
    });
});