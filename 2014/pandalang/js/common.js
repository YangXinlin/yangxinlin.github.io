/**
 * Desc:
 * Author: liangqi
 * Date: 14-2-22
 */
$(function(){
    // 条件筛选 性别筛选
    $('#sex-list').on('click',function(e){
        if(e.target.nodeName == 'SPAN'){
            var target = $(e.target);

            if(!target.hasClass('cur')){
                var index = target.attr('index');
                $('#sex-cur-bg').animate({'left':index * 55 +'px'},200);
                target.addClass('cur').siblings().removeClass('cur');
            }
        }
    });

    // 语言选择
    $('.can-lang').on('click',function(){
        var dropList = $(this).siblings('.drop-list');
        if(dropList.css('display') != 'block'){
            dropList.slideDown(300);
        }else{
            dropList.slideUp('fast');
        }
    });

    $('.drop-list').on('click',function(e){
        e.preventDefault();
        var target = $(e.target);
        if(e.target.nodeName == 'A'){
            var index = target.attr('index'),
                name = target.text();
            $(this).hide().siblings('.can-lang').children('span').text(name);
        }
    });


    $('.overlay').on('click',function(e){
        var that = $(this);
        if(e.target.id == 'overlay'){
            $(this).removeClass('active');
            setTimeout(function(){
                that.css('visibility','hidden');
            },260);
        }
    });

    $('#reg-link').on('click',function(e){
        e.preventDefault();
        $('.overlay').css({'visibility':'visible','opacity':1});
    });
});
