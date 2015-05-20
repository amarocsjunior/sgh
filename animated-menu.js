$(document).ready(function(){
 
    //When mouse rolls over
    $("li").mouseover(function(){
        $(this).stop().animate({height:'90px'},{queue:false, duration:600})
  
    });
 
    //When mouse is removed
    $("li").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600})

    });
 
});
