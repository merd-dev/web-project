const input=document.getElementById("input1")
 
function reverseString(str){
    return str.split("").reverse().join("")
}
function check(){
    const value=input.value;
    
    const reverse=reverseString(value);
    alert(reverse)

    if(value===reverse){
        alert("palendrom")
    }
    else{
        alert("it is not palendrom")
    }
    //    input.value=""
}