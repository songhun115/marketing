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

    $('.menu-ico').click(function(){
        $('.header-list').toggleClass('show');
        $('.header-wrap').toggleClass('on');
        
    });
    $('.sec08-counter02').each(function() { 
        var $this = $(this),
            countTo = $this.attr('data-count');
             
        $({ countNum: $this.text()}).animate({
          countNum: countTo 
        },
        {
          duration: 3000, 
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() { 
            $this.text(this.countNum);
          }
        });  
      });
});