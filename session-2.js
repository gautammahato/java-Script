
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



/*  Q2- Demonstrate the use of switch case statements in java script ?   */
let Age = prompt("what is your age ?");
switch(Age){
    case `12`:
        console.log("Your age is 12.");
        break;
    case `13`:
        console.log("Your age is 13.");
        break;
    case `14`:
        console.log("Your age is 14.");
        break;
    case `15`:
        console.log("Your age is 15.");
        break;
    default:
        console.log("Your age is not special");
        
    

}




/*  Q3- Write a java script program to find whether a Number is divisible by 2 and 3 ?   */

let num = prompt("Enter Your Number !")
num = Number.parseInt(num)
if(num % 2==0 && num % 3==0){
    console.log("Your Number is divisible by 2 and 3.")
}
else{
    console.log("Your Number is isn't divisible by 2 and 3.")
}

/*  Q4- Write a java script program to find whether a Number is divisible by 2 or 3 ?   */

let numb = prompt("Enter Your Number !")
numb = Number.parseInt(numb)
if(numb % 2==1 && numb % 3==0){
    console.log("Your Number is divisible by  3")
    
}
numb = Number.parseInt(numb)
if(numb % 2==0 && numb % 3==0){
    console.log("Your Number is divisible by 2 or 3")
    
}
numb = Number.parseInt(numb)
if(numb % 2==1 && numb % 3==1){
    console.log("Your Number isn't divisible by 2 or 3")
    
}
if(numb % 2==0 && numb % 3==1){
    console.log("Your Number is divisible by 2 ")
    
}




/*  Q5- Print "You can Drive" or "You can't drive" based on age being greater than 18 using ternay operator   */

let age_ = 19
let a = age_ > 18 ? "You can drive" : "You can't drive"
console.log(a)