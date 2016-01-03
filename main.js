function writeSlow(selector, string, speed){
    var el = document.querySelector(selector),
        stringLength = string.length,
        i = 0;
  
   function write(){
      var text =  el.textContent,
          newText = text + string[i];

      el.textContent = newText;
      i++;
     
     if(i < stringLength){  
       setTimeout(function(){
         write();
       }, speed);
     }
   }
  
  write();
}

window.addEventListener("load", function(){

    setTimeout(function(){
      var string = "hello... you can write me at: bogdanpintican@gmail.com";
     
      writeSlow(".someText", string, 100);
    }, 1000);

});