$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed:2000,
        disableOnInteraction: false,
        autoplay:true,
    });
    $('.swiper-slide').on('click',function(){
        var CName = $(this).attr('class').split(' ')[1]
        //console.log(CName)
        window.location.href = '../html/pageDetails.html?name=' + CName;
    })
})