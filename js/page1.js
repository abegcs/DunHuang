$(function(){
    setTimeout(function(){
        $('.ku468').show(function(){
            $('.ku148').show(function(){
                $('.ku156').show(function(){
                    $('.ku103').show(function(){
                        $('.ku231').show(function(){
                            $('.ku45').show(function(){
                                $('.ku25').show(function(){
                                    $('.ku23').show(function(){
                                        $('.ku323').show(function(){
                                            $('.ku334').show(function(){
                                                $('.ku375').show().addClass('fadeInUp');
                                            }).addClass('fadeInUp')
                                        }).addClass('fadeInUp')
                                    }).addClass('fadeInUp')
                                }).addClass('fadeInUp')
                            }).addClass('fadeInUp')
                        }).addClass('fadeInUp')
                    }).addClass('fadeInUp')
                }).addClass('fadeInUp')
            }).addClass('fadeInUp')
        }).addClass('fadeInUp')
    },2000)
    $('.ku-nav').on('click',function(){
        var num = $(this).attr('class').split(' ')[0];
        window.location.href = '../html/page1Details.html?num=' + num;
    })
    $('.logo').on('click',function(){
        window.location.href = '../index.html';
    })
})