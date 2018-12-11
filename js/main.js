backgounds = ['bg1', 'bg2', 'bg3'];
i =0 ;
$(document).ready(function(){
    $('.main-slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        speed: 600,
    });
});

var timerSlide = setInterval(function () {
    $('.next').click();
}, 6000);


$('.next').click(function () {
    changeBG();
    clearInterval(timerSlide);
    timerSlide = setInterval(function () {
        $('.next').click();
    }, 6000);
});
$('.prev').click(function () {
    preChangeBG();
    clearInterval(timerSlide);
    timerSlide = setInterval(function () {
        $('.next').click();
        changeBG();
    }, 6000);
});

function changeBG() {
    i++ ;
    if (i > 2){ i = 0}
    $('#backHead').animate({
        opacity : 0,
    }, {
        duration : 300,
        complete : function (){
            $(this).attr('src', './img/'+backgounds[i]+'.png')
        }
    }).animate({
        opacity : 1,
    }, 300)
}

function preChangeBG() {
    i-- ;
    if (i <0 ){ i = 2}
    $('#backHead').animate({
        opacity : 0,
    }, {
        duration : 300,
        complete : function (){
            $(this).attr('src', './img/'+backgounds[i]+'.png')
        }
    }).animate({
        opacity : 1,
    }, 300)
}



