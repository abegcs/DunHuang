function getName(name){
    var urlName = window.location.href.split('?')[1].split('=')[1];
    console.log(urlName);
    return urlName
}
$(function(){
var name = getName();
var containerBg = $('.container');
var imgShow = $('.imgShow');
switch(name){
    case 'p2-slide1':
        containerBg.css('background','url("../img/p2-details1.png") no-repeat center');
        imgShow.css('background','url("../img/p2-img1.jpeg") no-repeat center');
        break;
    case 'p2-slide2':
        containerBg.css('background','url("../img/p2-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p2-img2.jpg") no-repeat center',
            'left':'13%'
        });
        break;
    case 'p2-slide3':
        containerBg.css('background','url("../img/p2-details3.png") no-repeat center');
        imgShow.css('background','url("../img/p2-img3.jpg") no-repeat center');
        break;
    case 'p2-slide4':
        containerBg.css('background','url("../img/p2-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p2-img4.jpg") no-repeat center',
            'left':'13%'
        });
        break;

    case 'p3-slide1':
        containerBg.css('background','url("../img/p3-details1.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p3-img1.jpg") no-repeat center',
            'left':'13%'
        });
        break;
    case 'p3-slide2':
        containerBg.css('background','url("../img/p3-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p3-img2.jpg") no-repeat center',
            'left':'13%'
        });
        break;
    case 'p3-slide3':
        containerBg.css('background','url("../img/p3-details3.png") no-repeat center');
        imgShow.css('background','url("../img/p3-img3.jpg") no-repeat center');
        break;
    case 'p3-slide4':
        containerBg.css('background','url("../img/p3-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p3-img4.jpg") no-repeat center'
        });
        break;

    case 'p4-slide1':
        containerBg.css('background','url("../img/p4-details1.png") no-repeat center');
        imgShow.css('background','url("../img/p4-img1.jpg") no-repeat center');
        break;
    case 'p4-slide2':
        containerBg.css('background','url("../img/p4-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p4-img2.jpg") no-repeat center'
        });
        break;
    case 'p4-slide3':
        containerBg.css('background','url("../img/p4-details3.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p4-img3.jpg") no-repeat center',
            'left':'13%'
        });
        break;
    case 'p4-slide4':
        containerBg.css('background','url("../img/p4-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p4-img4.jpg") no-repeat center'
        });
        break;

    case 'p5-slide1':
        containerBg.css('background','url("../img/p5-details1.png") no-repeat center');
        imgShow.css('background','url("../img/p5-img1.jpg") no-repeat center');
        break;
    case 'p5-slide2':
        containerBg.css('background','url("../img/p5-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p5-img2.jpg") no-repeat center',
            'left':'13%'
        });
        break;
    case 'p5-slide3':
        containerBg.css('background','url("../img/p5-details3.png") no-repeat center');
        imgShow.css('background','url("../img/p5-img3.jpg") no-repeat center');
        break;
    case 'p5-slide4':
        containerBg.css('background','url("../img/p5-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p5-img4.jpg") no-repeat center'
        });
        break;

    case 'p6-slide1':
        containerBg.css('background','url("../img/p6-details1.png") no-repeat center');
        imgShow.css('background','url("../img/p6-img1.jpg") no-repeat center');
        break;
    case 'p6-slide2':
        containerBg.css('background','url("../img/p6-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p6-img2.jpg") no-repeat center'
        });
        break;
    case 'p6-slide3':
        containerBg.css('background','url("../img/p6-details3.png") no-repeat center').append(' <div class="imgShow2"></div>');
        imgShow.css({
            'background':'url("../img/p6-img3.jpg") no-repeat center',
            'width':'25%'
        });
        break;
    case 'p6-slide4':
        containerBg.css('background','url("../img/p6-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p6-img4.jpg") no-repeat center',
            'left':'13%'
        });
        break;

    case 'p7-slide1':
        containerBg.css('background','url("../img/p7-details1.png") no-repeat center');
        imgShow.css('background','url("../img/p7-img1.jpg") no-repeat center');
        break;
    case 'p7-slide2':
        containerBg.css('background','url("../img/p7-details2.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p7-img2.jpg") no-repeat center',
        });
        break;
    case 'p7-slide3':
        containerBg.css('background','url("../img/p7-details3.png") no-repeat center');
        imgShow.css('background','url("../img/p7-img3.jpg") no-repeat center');
        break;
    case 'p7-slide4':
        containerBg.css('background','url("../img/p7-details4.png") no-repeat center');
        imgShow.css({
            'background':'url("../img/p7-img4.jpg") no-repeat center',
            'left':'13%'
        });
        break;

}
$('.back').on('click',function(){
    window.history.back(-1);
})
})