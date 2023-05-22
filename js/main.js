$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    })
})


let navbarrOffset = $('.navbar').offset().top;
$(window).scroll(()=>{
    let wScreen = $(window).scrollTop();
    if(wScreen > navbarrOffset + 300){
        $(".navbar").css('background','rgb(105,75,135)');
        $('.toScroll i').fadeIn(500)
    }else{
        $(".navbar").css('background','transparent');
        $('.toScroll i').fadeOut(500)
    }
})


$('.toScroll i').click(()=>{
    $(window).scrollTop(0);    
})