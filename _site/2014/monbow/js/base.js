$(function(){
    //search
    $('.search_txt').focus(function(){
        $(this).parent().addClass('focus');
    }).blur(function(){
        $(this).parent().removeClass('focus');
    });
})