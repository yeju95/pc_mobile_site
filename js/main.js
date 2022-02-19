$(function(){
//main
    var sliderUl = $('#slider>ul');          
    var imgWidth = $('#slider img').width(); 
    var imgNumber = $('#slider li').length;  
    console.log(imgWidth);

    sliderUl.css({width:imgWidth*imgNumber});   


    var right = function(){
        sliderUl.find('li:last-child').insertBefore(sliderUl.find('li:first-child')); 
        sliderUl.css({'margin-left':-500});
        sliderUl.animate({'margin-left':0},300);
    };


    var left = function(){
        sliderUl.animate({'margin-left':500},300,'swing',function(){
            sliderUl.css({'margin-left':0});
            sliderUl.find("li:first-child").insertAfter(sliderUl.find("li:last-child"));
        });    
    }; 


    $(".right").click(function(){
        right();
    });


    $(".left").click(function(){
        left();
    });




    var du = 400; 

$(".first .item").on("mouseenter",function(){
  $(this).find("strong, span").stop().animate({opacity:1},du);
})
.on("mouseleave",function(){
  $(this).find("strong, span").stop().animate({opacity:""},du);
});


//슬라이더-slick
$('.slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,             //자동 슬라이드
    autoplaySpeed:3000,         //이미지 전환속도(정지된 시간 포함)
    arrows:true,                //양옆 화살표(true가 기본)
    dots:true,                  //페이지버튼
    //fade:true,                  //투명도로 전환
    easing:'swing',
    initialSlide:6,             //처음 시작하는 이미지(0부터 센다)
    speed:500,                  //이미지 전환시 만의 속도
    swipe:true,                //밀어서 움직이기
    //vertical:true              //위로 전환
    //rtl:true
});

winW = $(window).width();
if(winW < 769){
    $('.slides').addClass('mySlider');

    //slick이 적용된 요소에서 발생하는 이벤트를 처리해 주는 함수(꼭 slick 적용전 사용)
    $('.mySlider').on('init reInit afterChange',function(event, slick, currentSlide, nextSlide){
        var index = (currentSlide ? currentSlide : slick.currentSlide) + 1; 
        $('.slick-dots').html('<li>'+index+'/'+(slick.slideCount)+'</li>');
        //dot이 나올 자리에 삽입
    });

    $('.mySlider').slick({
        dots: true, 
    });

} else {
    $('.slides').removeClass('mySlider');
}



});