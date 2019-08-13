
$(document).ready(function(){
    if(window.location.href === 'http://localhost:3000/myOrder'){
       $('.home').removeClass('active');
        $('.myOrders').addClass('active');
       }
     else{var last = $(window).scrollTop();
 var l = $(window).scroll(function(){
    var last =$(window).scrollTop();
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
});}

$('form').on('submit', function(){
    var item = $('#order');
    var name = $('#name')
    var orders = {item: item.val(), name: name.val()};
    
    $.ajax({
        type: 'POST',
        url: '/Form',
        data: orders,
        success: function(data){
            location.assign('/myOrder')
        }
    });
    return false;
});
    
    $('.delete').on('click',function(){
        var item = $(this)[0].parentElement.firstChild.innerText
        $.ajax({
            type:'DELETE',
            url:'/myOrder/'+item,
            success: function(data){
                location.reload();
            }
        });
        return false;
    });

});