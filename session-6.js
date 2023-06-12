//>>>>>>>>> java script in the browser <<<<<<<<<<<<<<<<<<<
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>> Html / css / js <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/* :-  java script was initially created to make web pages alive.
    Js can be written right in a web page  html to make it intractive.
    
   : - The browser has an embbended ingine called the java script ingine or the java script run time

   :- JavaScript is a scripting language that enables you to create dynamically updating content, control 
   multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing 
   what you can achieve with a few lines of JavaScript code.)

   :- JavaScript (js) is a light-weight object-oriented programming language which is used by several 
   websites for scripting the webpages. It is an interpreted, full-fledged programming language that 
   enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the 
   been adopted by all other graphical web browsers. With JavaScript, users can build modern web 
   applications to interact directly without reloading the page every time. 
   The traditional website uses js to provide several forms of interactivity and simplicity.   
*/

/* >>>>> Developer Tolls - every browser has some developer tool which makes a developer life easier

1. Elements - all html Elements.
2. Console  - All error and Logs.
3. Network  - All network request.
*/



//>>>>>>>>>>> intraction <<<<<<<<<<<<<

// >>>>> alert - use to invoke mini window with a massage alert.
alert("Enter Your Name")
let name = prompt("Enter your name hare")
document.write(name)

//output-  Hello world Gautam mahato



// >>>>>>> prompt - used to take user input 


// >>>>>> confirm - show a massage and wait for the users to press ok or cancel returns take for ok and 
//                  false for cancel.
alert("Enter Your Name")
let name = prompt("Enter your name hare")
let write = confirm("Do you want to write it on the page")
if (write){
  document.write(name)  
}
else{
  document.write("please Allow me to write")
}

// output-    Hello world gAuTam mAhAtO




//>>>>>>>>>>>>>>> BOM and DOM <<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>> windows<<<<<<<<<<<
// 1. BOM
// 2. DOM 

/*  :-  Windows object represent  browser windows and proviedes method to control it. it is global object*/





// >>>>>>>>>>>> Practice set -06 <<<<<<<<<<<<<<<<<<<<<<<<<

/* Q-01   Write a program using prompt function to take input of age as a value from the users 
          and use alert to tell him if he can drive. 
*/

let age = prompt("Enter Your age !")
age = Number.parseInt(age)
const canDrive = (age)=>{
  return age>=18?true:false
}

if(canDrive(age)){
  alert("Yes you can Drive")
}
else{
  alert("You can't Drive")
}






/* Q-02   In question 1 use confirm to ask the users if he want to see the prompt again ?*/

const canDrive = (age)=> {
  return age = 18 ? true : false;
}

let runAgain = true;
while(runAgain){
  let age = prompt("Enter Your age !")
  age = Number.parseInt(age)

if(canDrive(age)){
   alert("Yes you can Drive")
 }
 else{
   alert("You can't Drive")
 }
  runAgain = confirm("Do you want to play again?")
}



/* Q-03   In the previous Question use console.error to log the error if the age entered is negatiove */
let runAgain = true;

const canDrive = (age)=> {
  return age = 18 ? true : false;
}

while(runAgain){
  let age = prompt("Enter Your age !")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please Enter a valid age ");
    break;
  }

if(canDrive(age)){
   alert("Yes you can Drive")
 }
 else{
   alert("You can't Drive")
 }
  runAgain = confirm("Do you want to play again?")
}




/* Q-04   Write a program to change the url to google.com (redirect) if users enters a numbers greater than 4.*/

let number = prompt("Enter Your number");
number = Number.parseInt(number);
if (number > 4) {
  location.href = "https://google.com"
}






/* Q-05   Change the backgroud color of the page to yellow red or any other coor based on users inputs through prompt*/
let color = prompt("Enter Your color Which you want")
document.body.style.background = color