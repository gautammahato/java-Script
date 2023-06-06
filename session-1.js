// >>>>>>> chapter - 1 <<<<<<<<<<<<<
// There are 7 premitive data type in java script 

let a = null;                  // null data type
let b = 1234;                  // Number data type
let c = true;                  // boolean data type   (can assign the value teur or false)
let d = BigInt;                // BigInt data type
let e = "java script";         // string data type 
let f = Symbol;                // Symbol data type
let g = undefined;             // undefined data type
console.log(a, b, c, d, e, f, g,)
console.log(typeof e);           // if i try to know which type of var is decalared 



// Non primitive data type - Object in java script 

const item = {
    "parth":  true,
    "Lovish": false,
    "Roshan": 1234,
    "Rahul": undefined,
    "Rohit": "string"

}
console.log(item["Rohit"])










//  practice set 

//  Q1- create a variable of type string and try to add number to it \

let x = "Rishi"
let y = 9
console.log( x+y )

                  // output = Rishi9

  
                  
                  
// Q2- use type of operator to find the data type of the string in last question

let P = "Rishi"
let Q = 9
console.log(typeof(P+Q))
                    // Output =  String



// Q3- create const object in java script can you change it to hold a number later 
const z = {
    name: "Rishi",
    section: 1,
    student: false
}
// z = "Rishi"     
                            //   Output = No we can't  got error.



// Q4- Try to add new key to the const object in question 3 were you able to do it 
const T = {
    name: "Rahul",
    section: 1,
    student: false
}
T['friend'] = "Parth"
T['bestFriend'] = "Rohit"

console.log(T)
            // yes we can 
            // Output = { name: 'Rahul', section: 1, student: false, friend: 'Parth' }





// Q5- Write a js program to crete a word meaning Dictionary of 5 words
const dict ={
    optimize     :  "make the best or most effective use of (a situation or resource).",
    tumid        :  "abnormally distended especially by fluids or gas.",
    filigree     :  "delicate and intricate ornamentation.",
    intemperance :  "excess in action and immoderate indulgence of appetites.",
    tautology    :  "useless repetition"

}
console.log(dict["intemperance"])
                                    //  Output = excess in action and immoderate indulgence of appetites.







// >>>>>>> chapter - 2 <<<<<<<<<<<<<

console.log("operator in js")
let a1 = 60;
let b1 = 3;
console.log("a1 + b1 = ", a1+b1)
console.log("a1 - b1 = ", a1-b1)
console.log("a1 / b1 = ", a1/b1)
console.log("a1 ** b1 = ", a1*b1)
console.log("a1 % b1 = ",  a1%b1)



                                // Output = operator in js
                                //                           a1 + b1 =  63
                                //                           a1 - b1 =  57
                                //                           a1 / b1 =  20
                                //                           a1 ** b1 =  180
                                //                           a1 % b1 =  0
                                //  
                                
                                
console.log("++a1 = ", ++a1)
console.log("a1++ = ", a1++)
console.log("--a1 = ", --a1)
console.log("a1-- = ", a1--)
console.log("a1 = ", a1)
                                        //  Output 
                                        //            ++a1 =  61
                                        //            a1++ =  61
                                        //            --a1 =  61
                                        //            a1-- =  61
                                        //            a1 =  60                                       



// Assignment Operators
  let assignment = 1;
  assignment  += 5
  console.log(assignment)
                                            //   output =  6

// comparison operators
let comp1 = 4;
let comp2 = 6;
console.log("comp1 == comp2 is ", comp1 == comp2)  
console.log("comp1 == comp2 is ", comp1 != comp2)  
                                                // output = false




// Logical operators
let x1 = 5;
let y1 = 6;
console.log(x1<y1 &&  x1==5)
                            //    output =   true








//  there are two type of the commment on the java crript 

// single line cmmments 
/* multi line comments */




/* if, else, else it, */
let a2 = prompt("Hey what is your age ?")
a2 = Number.parseInt(a2); // Converting the string into the Numbers 
if (a2<0){
    alert("This is an in valid age.");
}
else if (a2<9){
    alert("you are kid and you can't even think of driving");
}
else if (a2<18 && a2>9){
    alert("You are kid and can't think of driving below 18");
}
else {
    alert("You can now drive as you are above 18.");
}

// ternary operators
console.log ("You can Drive", a2<18? "Not Drive": "Drive")


//   JavaScript Demo: Statement - Switch
const expr = 'Apple';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.50 a pound.');
    break;
  case 'Mangoes':
  case 'Apple':
    console.log('Mangoes and Apple are $2 a pound.');
    // Expected output: "Mangoes and Apple are $2 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// >>>>>>>>>>  chapter -2 Practice set<<<<<<<<<<<<

/*  Q1- Use a logical operator to find whether the age of a person lies between 10 and 20  */

let age = prompt("What is your age?")
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20.")
}
else{
    console.log("Your age doesn't lies between 10 and 20.")
}