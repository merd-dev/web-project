const display=document.getElementById("display");

function appendTODisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value ="";
}
function backspaceDisplay(){
 let currentInput=document.getElementById("display")
   currentInput.value= currentInput.value.substring(0,input.value.length-1);
}
function calculate(){ 
  try{
  display.value=eval(display.value);
}
catch(error){
  display.value="error";
}
}