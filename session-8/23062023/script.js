//alert can be run one by one like this  



btn.addEventListener('click', function(e) {
  alert("Hello World !")
})


btn.addEventListener('click', function(e) {
  alert("It is Friday today")
})





//remove one function and get alert 1 either alert 2 to choose number from promt

//Note:-  to use  handler (RmoveEventListener) must be same function object otherwise it not going to work.


let x = function(e) {
  alert("Hello World!")
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 


btn.addEventListener('click', y);


let a = prompt("Enter the Number 1 or 2")
let b = alert("Click Me button which located on left side")

if (a == "2"){
  btn.removeEventListener('click', x)
}



//Event target handler
let x = function(e) {
  console.log(e.target)
  alert("Hello World!")
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 


btn.addEventListener('click', y);



//console.log(e)   :-   PointerEvent 
let x = function(e) {
  console.log(e.target)
  alert("Hello World!")
  console.log(e)
}

let y = function(e) {
  alert("It is Friday today")
}


btn.addEventListener('click', x); 

*/


//Event type client
let x = function(e) {
  console.log(e.target)
   console.log(e.type, event.clientX, event.clientY)
  //alert("Hello World!")
 
}

  
  
let y = function(e) {
  console.log(e)
  alert("It is Friday today")
}

btn.addEventListener('click', x); 
  