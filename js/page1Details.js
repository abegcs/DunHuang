
$(function(){
    var navNum = window.location.href.split('?')[1].split('=')[1];
    var container = $('.swiper-wrapper');
    console.log(navNum)
    switch(navNum){
        case 'ku468Nav':
            container.append(' <div class="swiper-slide 468">\n' +
                '                <div class="tip tip-left"></div>\n' +
                '               <div class="tip tip-right"></div>\n' +
                '            </div>')
            $('.swiper-slide').css({
                'background':'url("../img/468-img.png") no-repeat center'
            });
            $('.tip-left').css({
                'background':'url("../img/468-tip1.png") no-repeat center'
            });
            $('.tip-right').css({
                'background':'url("../img/468-tip2.png") no-repeat center'
            })
            break;
        case 'ku148Nav':
            container.append(' <div class="swiper-slide 148">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').css({
                'background':'url("../img/148-img.png") no-repeat center'
            });
            $('.tip-center').css({
                'background':'url("../img/148-tip.png") no-repeat center'
            });
            break;
        case 'ku156Nav':
            container.append('<div class="swiper-slide 156-1">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 156-2">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').eq(0).css({
                'background':'url("../img/156-img1.png") no-repeat center'
            });
            $('.swiper-slide').eq(1).css({
                'background':'url("../img/156-img2.png") no-repeat center'
            });
            $('.tip-center').eq(0).css({
                'background':'url("../img/156-tip.png") no-repeat center'
            });
            $('.tip-center').eq(1).css({
                'background':'url("../img/156-tip-2.png") no-repeat center'
            });
            break;
        case 'ku103Nav':
            container.append('<div class="swiper-slide 103-1">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 103-2">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 103-3">\n' +
            '                <div class="tip tip-center"></div>\n' +
            '            </div>')
            $('.swiper-slide').eq(0).css({
                'background':'url("../img/103-img1.png") no-repeat center'
            });
            $('.swiper-slide').eq(1).css({
                'background':'url("../img/103-img2.png") no-repeat center'
            });
            $('.swiper-slide').eq(2).css({
                'background':'url("../img/103-img3.png") no-repeat center'
            });
            $('.tip-center').eq(0).css({
                'background':'url("../img/103-tip.png") no-repeat center'
            });
            $('.tip-center').eq(1).css({
                'background':'url("../img/103-tip-2.png") no-repeat center'
            })
            $('.tip-center').eq(2).css({
                'background':'url("../img/103-tip-3.png") no-repeat center'
            })
            break;
        case 'ku231Nav':
            container.append(' <div class="swiper-slide 231">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').css({
                'background':'url("../img/45-img.png") no-repeat center'
            });
            $('.tip-center').css({
                'background':'url("../img/45-tip.png") no-repeat center'
            });
            break;
        case 'ku45Nav':
            container.append('<div class="swiper-slide 45-1">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 45-2">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').eq(0).css({
                'background':'url("../img/45-img1.png") no-repeat center'
            });
            $('.swiper-slide').eq(1).css({
                'background':'url("../img/45-img2.png") no-repeat center'
            });
            $('.tip-center').eq(0).css({
                'background':'url("../img/45-tip.png") no-repeat center'
            });
            $('.tip-center').eq(1).css({
                'background':'url("../img/45-tip-2.png") no-repeat center'
            });
            break;
        case 'ku25Nav':
            container.append(' <div class="swiper-slide 25">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').css({
                'background':'url("../img/25-img.png") no-repeat center'
            });
            $('.tip-center').css({
                'background':'url("../img/25-tip.png") no-repeat center'
            });
            break;
        case 'ku23Nav':
            container.append(' <div class="swiper-slide 23">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').css({
                'background':'url("../img/23-img.png") no-repeat center'
            });
            $('.tip-center').css({
                'background':'url("../img/23-tip.png") no-repeat center'
            });
            break;
        case 'ku323Nav':
            container.append('<div class="swiper-slide 323-1">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 323-2">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').eq(0).css({
                'background':'url("../img/323-img1.png") no-repeat center'
            });
            $('.swiper-slide').eq(1).css({
                'background':'url("../img/323-img2.png") no-repeat center'
            });
            $('.tip-center').eq(0).css({
                'background':'url("../img/323-tip.png") no-repeat center'
            });
            $('.tip-center').eq(1).css({
                'background':'url("../img/323-tip-2.png") no-repeat center'
            });
            break;
        case 'ku334Nav':
            container.append(' <div class="swiper-slide 334">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').css({
                'background':'url("../img/334-img.png") no-repeat center'
            });
            $('.tip-center').css({
                'background':'url("../img/334-tip.png") no-repeat center'
            });
            break;
        case 'ku375Nav':
            container.append('<div class="swiper-slide 375-1">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>'+
                '<div class="swiper-slide 375-2">\n' +
                '                <div class="tip tip-center"></div>\n' +
                '            </div>');
            $('.swiper-slide').eq(0).css({
                'background':'url("../img/375-img1.png") no-repeat center'
            });
            $('.swiper-slide').eq(1).css({
                'background':'url("../img/375-img2.png") no-repeat center'
            });
            $('.tip-center').eq(0).css({
                'background':'url("../img/375-tip.png") no-repeat center'
            });
            $('.tip-center').eq(1).css({
                'background':'url("../img/375-tip-2.png") no-repeat center'
            });
            break;
    }
    $('.back').on('click',function(){
        window.history.back(-1);
    })
    $(document).on('click','.swiper-slide',function(){
        var imgShow = $(this).attr('class').split(' ')[1];
        $('.ImgShow').css({
            'background':'url("../img/img-4/'+imgShow+'.jpg") no-repeat center'
        })
        $('.container').show();
    })
    $('.container').on('click',function(){
        $(this).hide()
    })
})
