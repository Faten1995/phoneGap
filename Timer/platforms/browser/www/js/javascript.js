function move(){

  var elem = document.getElementById("progressBarIndicator");
  var width = 1;
  var id = setInterval(frame, 500);
  function frame(){
    if(width>=100){
     clearInterval(id);
   } else {
     width++;
     elem.style.width = width + '%';
   }
  }

}
