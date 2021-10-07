
    $(document).ready(function(){//시작
    $(".open1").click(function(){
    //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
    //open1을 클릭하면 다음과 같은 일이 일어남
    //leftwrap 의 css속성중에 left값이 0
      $(".leftWrap").animate({"left":"0"},500,"swing");});
    
    $(".close1").click(function(){
      $(".leftWrap").animate({"left" : "-100%"}, 500);
    });
   
    var swiper = new Swiper(".mySwiper01", {
      direction: "vertical",
      slidesPerView: 1,
      // spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        nested: true
      },
      //콜백함수 - 슬라이드가 바뀔때마다 체크
      on: {
        slideChangeTransitionStart: function () {
        if($(".swiper-slide.con").hasClass("swiper-slide-active") === true){
          $(".swiper-slide.con").find(".sec").addClass("on")
        }else{
          $(".swiper-slide.con").find(".sec").removeClass("on")
        } if($(".swiper-slide.recruit").hasClass("swiper-slide-active") === true){
          $(".swiper-slide.recruit").find(".sec02").addClass("on")
        }else{
          $(".swiper-slide.recruit").find(".sec02").removeClass("on")
        } if($(".swiper-slide.last").hasClass("swiper-slide-active") === true){
          $(".swiper-slide.last").find(".sec03").addClass("on")
        }else{
          $(".swiper-slide.last").find(".sec03").removeClass("on")
        }

      }}
    });
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
   
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    
      
    
   

    });//끝

    

