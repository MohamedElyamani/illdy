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





let ils = document.querySelectorAll('.navbar-nav .nav-link');

ils.forEach((el)=>{
    el.addEventListener('click',()=>{
        ils.forEach((el)=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    })
}) 