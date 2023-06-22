//set the className text-black to red then use "className"
first.className = "yellow text-dark"


// classList
fisrt.classList // it show all the classes which are exist in HTML  file.

//if we have to remove specific class then use "classList"
first.classList.remove("red")

//if we want to add which removed class
first.classList.add("red")

//if class is there exist to use "toggle" we can add or remove
first.classList.toggle("red")


//setTimeout & setInterval - it execute this function after 2000 ms 

alert("Hello")
setTimeout(function() {
    alert("I am insude of setTimeout")
  }, 2000)


  //using prompt 
  document.write("Hello")

let a = setTimeout(function(){
  alert("hey I am inside the setTimeout")
},3000)
let b = prompt("Do you want to run this setTimeout?")
if("n" == b){
  clearTimeout(a)
}

console.log(a)




// To check it Running or not
document.write("Hello")
const sum = (a, b, c) => {
  console.log("Yes i am Running" + (a + b + c))
  a + b
}
setTimeout(sum, 1000, 1, 2, 12)




//setInterval :-  it execute again and again after the setInterval time "3 sec"
setInterval(function(){
    alert("This is setInterval")
  },3000)
  