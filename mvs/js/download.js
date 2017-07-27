/**
 * Created by liuxiaohuan on 2017/7/14.
 * download block
 */

$('.spe-xh').mouseenter(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.spe-xh').removeClass('active');
        $(this).addClass('active');
    }

});

$('.spe-xh').mouseleave(function(){
    $('.spe-xh').removeClass('active');
});


/**
 * Created by liuxiaohuan on 2017/7/25.
 * left-nav
 */

$('.left-navwrap').mouseenter(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.nav-de').css('display','none');
        // $('.handicon').css('display','none');
    }else{
        $('.left-navwrap').removeClass('active');
        $(this).addClass('active');
        // $('.handicon').css('display','none');
        // $('.nav-de').show();
    }

});

$('.left-navwrap').mouseleave(function(){
    $('.left-navwrap').removeClass('active');
});


/**
 * Created by liuxiaohuan on 2017/7/25.
 * scrollTop
 */
$(window).bind(
    "scroll",
    function() {
        if($(this).scrollTop() > 100) {
            $(".fmenu-box").removeClass("tb-large").addClass("tb-small")
        } else {
            $(".fmenu-box").removeClass("tb-small").addClass("tb-large")
        }
    }
);







