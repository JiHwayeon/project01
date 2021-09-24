
    $(document).ready(function(){//시작
    $(".open1").click(function(){
    //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
    //open1을 클릭하면 다음과 같은 일이 일어남
    //leftwrap 의 css속성중에 left값이 0
      $(".leftWrap").animate({"left":"0"},500,"swing");});
    
    $(".close1").click(function(){
      $(".leftWrap").animate({"left" : "-100%"}, 500);
    });
   

    
      
    
   

    });//끝

    

