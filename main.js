function writeSlow(selector, string, speed){
  var el = document.querySelector(selector);
  var stringLength = string.length;
  
 function write(){
  var text =  el.textContent;
  var newText;

  if(text.length === stringLength){
    return 'it is done';
  }

  newText = text + string[text.length];
  el.textContent = newText;
   
   setTimeout(write, speed);
 }
  
  write();
}

setTimeout(function(){
  var string = "... hello";
  writeSlow(".someText", string, 50);
}, 1000);