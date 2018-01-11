/**
 * Created on  nav
 */
$(function(){
    $('.dis-tablecell li').each(function() {
        $(this).on('click', function() {
            //console.log($(this).index());
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            if($(this).index()==0){
                console.log('00');
                $('html ,body').animate({scrollTop: 0}, 300);
            }else if($(this).index()==1){
                console.log('11');
                $('html ,body').animate({scrollTop: $('.box-01').height()}, 300);//2500
            }else if($(this).index()==2){
                // console.log('22');
                //$('html ,body').animate({scrollTop: $('.box-01').height()+$('.box-02').height()}, 300);
            }else if($(this).index()==3){
                // console.log('33');
                $('html ,body').animate({scrollTop: $('.box-01').height()+$('.box-02').height()+$('.box-03').height()}, 300);
            }else if($(this).index()==4){
                // console.log('44='+$('.box-01').height()+'|'+$('.box-02').height()+'|'+$('.box-03').height()+'|'+$('.box-04').height());
                $('html ,body').animate({scrollTop: $('.box-01').height()+$('.box-02').height()+$('.box-03').height()+$('.box-04').height()}, 300);
            }else if($(this).index()==5){
                // console.log('55');
                $('html ,body').animate({scrollTop: $('.box-01').height()+$('.box-02').height()}, 300);
            }
        });
    });
});

//    console.log($('.top-01').height()+$('.top-02').height()+$('.top-03').height()+$('.top-04').height())