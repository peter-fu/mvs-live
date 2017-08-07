/* mini menu nav */

$(".menu-trigger, .mobilenav").click(function () {
    // $(".mobilenav").fadeToggle(500);
    // event.preventDefault();
    $('.menu').toggleClass('is-active');
    $('.menu').slideToggle(300);
    $('#topnav .cart-open').removeClass('opened');
});
$(".menu-trigger, .mobilenav").click(function () {
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
    // $('.menu').slideUp()
});


var screenwidth=document.body.clientWidth;

if(screenwidth<990){

    $('.menu ul li a').click(function () {
        $('.menu').css('display','none');
        $('.menu').removeClass('is-active');
        $(".top-menu").removeClass("top-animate");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");

    });
}
/* mini menu nav end */