// console.log("kebede")
// var x="abebe"
//  console.log(x)
//   x=45
//  console.log(x)
// let num1=15;
// let num2=10;
// let sum;
// let pro;
// let div;
// sum=num1+num2;
// console.log(sum)
// pro=num1*num2;
// console.log(pro)
// div=num1/num2;
// console.log(div)
// num2=++num1;
// console.log(num2)
// let num3="10";
// console.log(num2!=num3);
// let c="hello"
// let d="world"
// a= c + " " + d;
// console.log(a)
// console.log(4==="4")
// var student=[90,"adugna","abebe",180000]
// console.log(student)
// console.log(student[0] * student[3])
// let calc;
// calc=8+5*4+(3+5)+5-3*8/4
// console.log(calc)
function listnum() {
  console.log(1);
}
// listnum()
// listnum()
// console.log(2<"12")
// console.log(2.0==="2");
// console.log(2.0=="2");
// console.log(1+"john");
// console.log("2"<"2");
// console.log("2">"12");
// console.log(1==true&& 0>true||"31">"9"||10>5||!("2"=="two"| 1=="1"));
// console.log(1==1||2==2 && 3==7);
// console.log(2>"john");
// console.log((x = 1 == true));
// function calculatenum(a, b) {
//   console.log(a + b);
//   console.log(a * b);
//   console.log(a - b);
// }
// calculatenum(12, 2);
// function laptopprice(laptopname, price, discount) {
//   tax = (price * 6) / 100;
//   total = price - discount + tax;
//   console.log(laptopname + "laptop price is $" + total);
// }
// laptopprice("hp", 100, 10);
// const addtwonumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addtwonumbers(20, 30));

// function checkIfpass(pass, score, name) {
//   if (score >= pass) {
//     console.log(name + ": passed");
//   }
//   if (score < pass) {
//     console.log(name + ": failed");
//   }
// }
// checkIfpass(50, 67, "chala");
// const checkpassword = (pass1, pass2) => {
//   //  if(pass1===pass2){
//   pass1 === pass2
//     ? console.log("the password is confirmed")
//     : //  }
//       //  else{
//       console.log("the password isnot matched");
//   //  }
// };
// checkpassword("Abebe1234", "abebe1234");

// function whatisday(day) {
//   let dayname;

//   switch (day) {
//     case 1:
//       dayname = "monday";
//       break;
//     case 2:
//       dayname = "tuesday";
//       break;
//     case 3:
//       dayname = "wednesday";
//       break;
//     case 4:
//       dayname = "thursday";
//       break;
//     case 5:
//       dayname = "friday";
//       break;
//     case 6:
//       dayname = "saturday";
//       break;
//     case 7:
//       dayname = "sunday";
//       break;
//     default:
//       dayname = "invalid day";
//   }

//   console.log("Today is " + dayname);
// }

// whatisday(8);

// function add(a, b) {
  // if (isNaN(a) || isNaN(b)) {
//     return "please enter number values only";
//   }

//   return parseFloat(a) + parseFloat(b);
// }
// console.log(add(13, "12.5"));
// function area(h, b) {
//   if (isNaN(h) || isNaN(b)) {
//     return "please enter the numerical value";
//   } else if (b <= 0 || h <= 0) {
//     return "please enter the positive number";
//   } else return (parseFloat(h) * parseFloat(b)) / 2;
// }
// console.log(area(5, "2"));

// function score(a, b, c) {
//   if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     return "please enter the number value";
//   } else if (b < 0 || a < 0 || c < 0) {
//     return "please enter the positive number only";
//   } else {
//     let win = Math.round[a] * 3;
//     let draw = b;
//     return win + draw;
//   }
// }
// console.log(score(12,56,7));


// change minute to second

// function minuteToSecondConverter(a){
//   if(isNaN(a)){
//     return "this isnot number please enter the number"
// }
//   else if(a<0){
//     return "please enter positive number"
//   }
//   else{
//     let x=a*60;
//     return x;
//   }

// }
// console.log(minuteToSecondConverter(2))

//   //hello display
// function myFirst(){
   
//  console.log("hello"); 
// }
//  myFirst();

//   //  display number
//  function mySecond(a){

//   console.log(15)
//  }
//   mySecond()
//   // 
//  function myThird(b){
//   console.log("hello world")

//  }
//  mySecond()

//  function myFourth(arr){
//     if(arr.length > 0){
//       console.log(arr[0])
//     }
//  }

// const examplearray=[0,3,4,65,76,87,1];
// myFourth(examplearray)

// function myFifth(arr){

//     if(arr.length===2){
//       console.log(arr[0]+arr[1])
//     }
//     else{
//       console.log("please enter only 2 number")
//     }
  
// }

// const examplearr=[8,2]
// myFifth(examplearr)

// function increment(a){
//      return ++a;
// }

// console.log(increment(4))

// function my(arr){
//   if(arr.length===2){
//     console.log(3*arr[0])
//   }
//   else{
//     console.log("please enter only 2 number")
//   }
// }
// const examplearr1=[1,3,2]
// my(examplearr1)

// function animals(chicken,cow,pig){
//   const chickleg=2;
//   const cowleg=4;
//   const pigleg=4;

//   const total=chicken*chickleg+cowleg*cow+pig*pigleg;
//   return total;
// }
// console.log(animals(1,1,1))

// function equal(num1,num2){
//   if( num1===num2){
//     return true
//   }
//   else
//     return false
  

// }
// console.log(equal(2,"4",))

// function divisible(a){
//    if(a%100==0){
//     return true;
//    }
//    else
//    return false;
// }

// console.log(divisible(200))

// function evenodd(x){
//     if(isNaN(x)){
//       console.log("this isn't numerical value please enter a number")
//     }
//    else if(x%2==0){
//     console.log("even");
//    }
//    else if(x%2!=0){
//     console.log("odd");
//    }
//   }
//    evenodd()

//    for(let i=0;i<10;i++){
//      console.log("hello")
//    }
// let array=[2,5,3,2,1,3,4,6,9,90]
// for(let i=0;i<array.length;i++){
//   console.log(array[i])
// }
// function passorfail(arr){
//   for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
//   if(arr[i]>=50){
//     console.log("student " + i + " is passed ")
//   }
//   else{
//     console.log("student " + i + " is failed" )
//   }
// }
// }
//  passorfail([56, 23, 90, 56, 75, 89, 45]);


//  function addup(a){
//   if(isNaN(a)){
//     console.log("This is not numerical value")
//   }
//   else if(a<0){
//     console.log("please enter only positive number")
//   }
//   else{
//     let result=0;
//     for( i=0;i<=a;i++){
//        result=result+i;
//     }
//     return result;
//   }

//  }
// console.log(addup(600))

// let object={
//   firstName:"Abebe",
//   lastName:"Kebede",

//  xx: function(){
//   console.log("abebe beso bela")
//  }
// }

//     object.xx()
//     Object.firstName

//  console.log("abebe".charAt(4))
//  console.log("abebe".indexOf("e"))
//  console.log("abebe".toUpperCase())

//  let some=["abebe","debebe","kebede","aman"]
//  console.log(some)
//  some.pop()
//  console.log(some)

//  some.shift()
//  console.log(some)


//  function wordFinder(a){
//   console.log("name")
//   let hiddenWordContainer="";
//   for(let i=0;i<=a.length;i++){
//     let singleLetter=a.charAt(i);
//      console.log("singleLetter",singleLetter)


//     if(singleLetter!==singleLetter.toUpperCase()){
//       hiddenWordContainer=hiddenWordContainer+singleLetter;
//       console.log("ourStorage",hiddenWordContainer)
//     }
    
//   }
//     return hiddenWordContainer;

// }
// console.log(wordFinder("AGHcSJaDNt"));



// function nest(arr1,arr2){
//   if(!(Array.isArray(arr1) && Array.isArray(arr2))){
//     return "both must be the array"
//   }
//   let arr1sort=arr1.sort();
//   let arr2sort=arr2.sort();
//   let arr1min=arr1[0];
//   let arr2min=arr2[0];
//   let arr1max=arr1[arr1.length-1];
//   let arr2max=arr2[arr2.length-1];
//   if(arr1min>=arr2min && arr1max<=arr2max){
//     return true;
//   }
//   else{
//     return false;
//   }
  
// }
//     arr1 = [1, 2, 4, 3, 6, 5];
//     arr2=[0,4,3,2,1];
    
// console.log(nest(arr1,arr2));


// function isPrime(num){
//   if(num<2){
//     return false
//   }
//   else{
//   for(let i=0;i<=Math.sqrt(num);i++){
//     if(num%2==0){
//       return false;
//     }
//   }
//   return true;
//   }
// }

// console.log(isPrime(6))

// function ismagicArray(arr){
//   let sumOfPrime=0;
//   for(let i=0;i<=arr.length;i++){
//      if(isPrime(arr[i])){
//       console.log(arr[i],"is a prime number")
//        sumOfPrime=sumOfPrime+arr[i];
//      }
//      if(sumOfPrime=arr[0]){
//       return true;
//      }
//      else{
//      return false;
//      }
//     }
//   }

// let arr=[6];
// console.log(ismagicArray(arr))


function bubblesort(num){
  let j=true;
  while(j){
    j=false;
  for(let i=0;i<num.length-1;i++){

    if(num[i]>num[i+1]){
      j=true;
      let temp=num[i];
          num[i]=num[i+1];
          num[i+1]=temp;
    }
  }
}
      return num;
}
    let num1=[7,9,5,4,6]
  console.log(bubblesort(num1))

  function  displayNum(x){
    for(let i=1;i<10;i++)
       console.log(i);
  }
  displayNum()


  function nextNum(a){
        let n=a+1;
     for(let i=n;i<n+5;i++){
       console.log(i)
     }
      
  }
  nextNum(2)


function nextSum(a) {
  let n = a + 1;
  let sum=0;
  for (let i = n; i < n + 10; i++) {
    sum=sum + i;
    
  }
  console.log(sum);
}
nextSum(7);


function toDo(arr){
     for(i of arr){
      console.log (i);
     }
}
  toDo([1, "hello", 8, 4]);

function tikvah(d) {
  
    console.log(d.length);
}
let r = [1, "hello", 8, 4];
let e = ["world", 13];
tikvah(r);
tikvah(e);

function arrSum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
         sum=sum + arr[i]
  }
          console.log(sum);
}
   f = [5, 6, 99, 8, 76, 4, 68, 44];
   arrSum(f);
   t=[3,0]
   arrSum(t);

function evenOdd(arr){
  let even=0;
  let odd=0;
  for(let i=0;i<arr.length;i++){
       if(arr[i]%2==0){
        even=even + arr[i];
       }
       else{
        odd=odd + arr[i];
       }

  }

      console.log(even-odd)
}   

  evenOdd([5, 6, 99, 8, 76, 4, 68, 44]);

function evenIndex(arr){
  for(let i=0;i<arr.length;i=i+2){
    console.log(arr[i])
    
} 
} 
 evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);
 evenIndex([11,"Sam",3,7,"car"])

 function sampleArray(arr){
   arr.pop();
   arr.push(32);
   console.log(arr);
 }
  let modify = [5, 6, 99, 8, 76, 4, 68, 44];
  sampleArray(modify);

function sampleArray2(arr){
  arr.sort((a,b)=>a-b);
  console.log(arr)
}  
sampleArray2(modify)

