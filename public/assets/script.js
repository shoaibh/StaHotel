
//var x =0;
//
var last = $(window).scrollTop();
 



var l = $(window).scroll(function(){
    var last = $(window).scrollTop();
    if(last>300){
     $('.main').addClass('blur');
        $('.welcome').fadeOut(1000);
        $('.home').removeClass('active'); 
        $('.nmenu').addClass('active');
}
if(last==0){
        $('.welcome').fadeIn(2000);
    $('.main').removeClass('blur');
    $('.home').addClass('active'); 
        $('.nmenu').removeClass('active');
    }
});


