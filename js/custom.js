$(document).ready(function(){

    $(window).scroll(function(){
        let header = $('.header').innerHeight();
        let windowHeight = $(window).scrollTop(); 
        if(windowHeight > header){
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }

    });

});