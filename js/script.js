$(document).ready(function(){
    // menu
    $(".block_menu").on("click", "a", function(e){
        e.preventDefault();
        const anchor = $(this).attr("href");
        const linkScroll = $(anchor).offset().top;
        $("html, body").stop().animate({
            scrollTop: linkScroll -43
        }, 700)
    });

    $(".totop").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0,
        }, 700);
    });

    // collapse
    $("#collapse").on("click", function(){
        $("#cover").toggle();
        $("#sidebar").toggleClass("active");
        $("#line1").toggleClass("close");
        $("#line2").toggle();
        $("#line3").toggleClass("close");
    });
    
    $("#cover").on("click", function(){
        $("#collapse").click();})
});
