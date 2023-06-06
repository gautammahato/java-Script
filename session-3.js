// >>>>>>>>>>>>>>>>> Loop and Function <<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>> For Loop <<<<<<<<<<<
for (let i = 0; i < 5; i++){
    console.log(i)
}
                                   /*output = 0
                                              1
                                              2
                                              3
                                              4
                                   */ 

            

//program to add first Natural numbers
let sum = 0;
let n = prompt("Enter the value");
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i+1)
    console.log((i+1), "+")
}
console.log("sum of the first " +n+ "Natural numbers is" + sum)

                                                 // if enter 3 Output = sum of the first 3Natural numbers is6





// >>>>>> in Loop <<<<<<<<<<<<<<<
let obj = {
    subh: 45,
    shiv: 55,
    khushi: 12,
    aastha: 15

}
for (let a in obj){
    console.log("Marks of " + a + " are = " + obj[a] )
}


// >>>> for of loop <<<<<<<<
for (let b of "Shubh"){
    console.log(b)
}


//>>>>> while loop <<<<<<<<
//note :-  in while loop check the condition first the execute block 

let o = prompt("Enter the value of o ")
n = Number.parseInt(o)

let i = 0;
while(i<n){
    console.log(i)
    i++;
}



//>>>>>>>>>> Do while loop <<<<<<<<<<<
//note :-  it execute atleast once because "do while loop" run the block first then check the consition.

let m = prompt("Enter the value of n ")
n = Number.parseInt(n)

let j = 0;
do{
    console.log(j)
    i++;
}while(j<n)





/* >>>>>>>>>>>>> Function <<<<<<<<<<<<<<<<<<< */
//  The functions use to eliminate code complexity by enabling re-usability.

let a = 1;
let b = 2;
let c = 3;

console.log("Avarage of a and b ", (a + b) / 2)
console.log("Avarage of b and c ", (b + c) / 2)
console.log("Avarage of c and d ", (a + c) / 2)
                                                   //Output = Avarage of a and b  1.5
                                                   //         Avarage of b and c  2.5
                                                   //         Avarage of c and d  2




//   use function
function Avg(x, y){ 
    return (x + y) / 2
    
  }
  
  let d = 1;
  let e = 2;
  let f = 3;
  
  console.log("Avarage of d and b is ", Avg(d, e))
  console.log("Avarage of e and f is ", Avg(e, f))
  console.log("Avarage of d and f is ", Avg(d, f))




  // Arrow function 
  const hello = ()=>{
    console.log("how are you?")
    return "i am toh fine yaar Hey "
  }
  let v = hello();
  console.log(v)

  /* Output =   how are you?
                i am toh fine yaar Hey      */





/*  >>>>>>>> practice set-3 <<<<<<<<<<<<< */

// Q-1 Write a program to print the marks of a students in an object using For loop.
let marks = {
    Rishav : 85,
    Rahul  : 95,
    Rohit  : 99,
    Ronit  : 75,
    Rudra  : 100
}  
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]])
}                                          

/* Output 
The marks of Rishavare 85
The marks of Rahulare 95
The marks of Rohitare 99
The marks of Ronitare 75
The marks of Rudraare 100
*/




// Q-2  Write the program in Q-1 using for in loop 
let marks_ = {
    Rishav : 85,
    Rahul  : 95,
    Rohit  : 99,
    Ronit  : 75,
    Rudra  : 100
}  
for(let key in marks_){
    console.log("The marks of " + key + "are " + marks_[key])
} 

/*Output 
The marks of Rishavare 85
The marks of Rahulare 95
The marks of Rohitare 99
The marks of Ronitare 75
The marks of Rudraare 100
*/


// Q-3 Write the program to print tyr again until the uses enter the correct number
// (while loop)
let cn = 5 
let k 
while (k !=cn){
    console.log("Try again")
    k = prompt("Enter the correct Number")

}
console.log(" Congrate !  You have entered the Correct number")

/*Output

Enter the correct Number> 1
Try again
Enter the correct Number> 2
Try again
Enter the correct Number> 3
Try again
Enter the correct Number> 4
Try again
Enter the correct Number> 5
 Congrate !  You have entered the Correct number

*/


// Q-4 Write a function to find mean of the 5 numbers  (using arrow function)
const mean = (a, b, c, d, e) =>{
    return (a+b+c+d+e)/4
  }
  console.log (mean(3,4,5,6,7))

/* Output

6.25

*/