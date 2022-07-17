var text = document.getElementById("text"); 
text.style.color = 'white';
procent = 70;
      var  startAngle2 = 0.00;
      var  endAngle2 = 0.21;
      var timeStart = 0;
      var timeEnd = 200;
      var timer = setInterval(function() {
         if (timeStart == timeEnd) {   
        text.innerHTML = '100%';
            clearInterval(timer);
         } else { 
      
      text.innerHTML = Math.round(procent) + '%';
      timeStart++;
      procent = procent + 0.15; 
      endAngle2 =  endAngle2 + 0.01;
         }
      }, 24);

var text_2 = document.getElementById("text-2"); 
text.style.color = 'white';
procen_t = 800470;
      var  start = 0.00;
      var  end = 0.21;
      var timeS = 0;
      var timeE = 200;
      var time_r = setInterval(function() {
         if (timeS == timeE) {   
        text_2.innerHTML = '805204K';
            clearInterval(time_r);
         } else { 
      
      text_2.innerHTML = Math.round(procen_t) + 'K';
      timeS++;
      procen_t = procen_t + 21.15; 
      end = end + 0.01;
         }
      }, 24); 




document.addEventListener('keydown', function(e) {

   if (event.keyCode === 13) {

      input.getElementById("audio-6").play();
         
   }

}); 

function ClickToPlay() {

   input.getElementById("audio-6").play();  

};

