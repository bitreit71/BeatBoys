var loading = 0;

setInterval(function(){
   if(loading < 100) {
      if(randomNumberFromRange(0,4) == 0) {
         loading++;
         var angle = -45 + loading * 1.8;
         $(".wheel").css("transform", `translate(-50%,-50%) rotate(${angle}deg)`);
         $(".details span").text(loading);
      }
   } else {
      $(".wheel").addClass("done");
   }
}, 20);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}