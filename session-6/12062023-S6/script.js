//>>>>>>>>>>>>>>> BOM and DOM <<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>> windows<<<<<<<<<<<
// 1. BOM
// 2. DOM 

/*  :-  Windows object represent  browser windows and proviedes method to control it. it is global object*/

console.log(window)
console.log(document.body)
document.body.style.background = "yellow"


/*Browser object model- 
    - The browser object model (BOM) represent additional object provided by the browser (hjost environments)
      The function alert / conform /prompt are also a part of the BOM. 
      
  */

location.href = "https://www.w3schools.com/"

// >>>>> Document object model <<<<

/*   Document object model
       -  DOM represent the page content as HTML  
       
       example -  */
       console.log(document.body)                        // page body as js object
       document.body.style.background = "yellow"         // change page backgroud to yellow 







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