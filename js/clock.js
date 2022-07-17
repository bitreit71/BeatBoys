  $(document).ready(function() {

  var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]; 
  var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  var newDate = new Date();
  newDate.setDate(newDate.getDate());    
  $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
      
  setInterval( function() {

      var minutes = new Date().getMinutes();
      $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
      },1000);
      
  setInterval( function() {

      var hours = new Date().getHours();
      $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
      }, 1000);
      
  }); 