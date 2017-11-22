/*

 Main.js

 01. Menu toggle
 02. Top bar height effect
 03. Home content slider
 04. Home background slider
 05. Home background and content slider
 06. Quote slider
 07. Image slider
 08. Services slider
 09. Employee slider
 10. Work slider
 11. Footer promo
 12. Contact form
 13. Scrollto
 14. Magnific popup
 15. Equal height
 16. fitVids

 */

/**
 * Created by liuxiaohuan
 * download block
 */

$('.spe-hover').mouseenter(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.spe-hover').removeClass('active');
        $(this).addClass('active');
    }

});

$('.spe-hover').mouseleave(function(){
    $('.spe-hover').removeClass('active');
});












/*＊ menu nav ＊*/

$('.menu ul li').click(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        // $('.menu').slideDown(300).addClass('is-active');
    }else{
        $('.menu ul li').removeClass('active');
        $(this).addClass('active');
        // $('.menu').slideUp(300).removeClass('is-active');
        // $(".top-menu").removeClass("top-animate");
        // $(".mid-menu").removeClass("mid-animate");
        // $(".bottom-menu").removeClass("bottom-animate");
    }

});



/* mini menu */
var screenwidth=$(window).width();

$(window).resize(function () {          //当浏览器大小变化时
    $('.menu').hide();
});

if(screenwidth<1100){
    $('.menu').hide();
    $('.menu-trigger').click(function () {
        // $('.menu').toggleClass('is-active');
        // $('.menu').slideToggle(300);
        // $('.menu').hide();


        if($('.menu').hasClass('is-active')){
            $('.menu').slideUp(300).removeClass('is-active');

        }else{
            $('.menu').removeClass('active');
            $('.menu').slideDown(300).addClass('is-active');
        }

        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
        // $('.menu').slideUp()
    });

    $('.menu ul li').click(function(){
        $('.menu').slideUp(300).removeClass('is-active');
        $(".top-menu").removeClass("top-animate");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    });

}
else{
    $('.cn-menu.menu').css('display','block');
}
/* mini menu end*/

/*＊ menu nav end＊*/