//>>>>>>>>>>>>>>>>>>>>>>>>>>>  chapter 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>> String method <<<<<<<<<<<
let name = "rishigyanu"
console.log(name.length)                // method_1- length of the string
console.log(name.toUpperCase())         // method_2- function to use change into uppercase method
console.log(name.toLowerCase())         // method_3- function to use change into lowercase method
console.log(name.slice(5,10))           // method_4- function to use to split the string. slice method
console.log(name.replace("rishigyanu", "GyanuRishi"))     //method_5- function to use replace the name or any charactor og the string. replace method
let friend = "Gautam"
console.log(name.concat("is a bestFriend of ", friend, " Forever" )) //method_6- concat string method (to use add the some string on existing string)

let friend2 = "      Ronit         "
console.log(friend2.trim())              // method_7 - to use this trim method we remove the first and last space of the string.


/*  Output
10
RISHIGYANU
rishigyanu
gyanu
GyanuRishi
rishigyanuis a bestFriend of Gautam Forever
Ronit
*/



// Task ---  Print the string in  java script to use of for loop
const names = ['RishiGyanu']
for ( let content of names ){
  console.log(content)
}

/* output
RishiGyanu
*/



// >>>>>>>>>  practice set 4 "string"  <<<<<<<<<<<<<<<<<

// Q-1  What will the following print in java script 
//      console.log("rishigyanu\".length) 

let str = "rishigyanu\""
console.log(str.length)

//outPut -  11       (string count it one charactor of /"" )



/* Q-2 Explore the inculude satrtswith and endswith function of a string */
const element = "Adventure trip late june"
console.log(element.endsWith("june"))
console.log(element.startsWith("Adventure"))

// output -  true, true





/* Q-3 Write a program to correct a given string to lowercase */

let gautam = "RISHIGYANU"
console.log(gautam.toLowerCase())

//OUTPUT -    rishigyanu

/* Q-4  Extract the amount of this string "Plese give Rs-1000*/
let str2 = "please give 1000"
let amount = Number.parseInt(str2.slice("please give ".length))
console.log(amount)

// output - 1000



/* Q-5  Try to change 4th charactor of a given string where you able to do it ?*/

let a = "rishigyanu"
console.log(a.replace('h', 'H'))

/* output - risHigyanu

yes we can by replace method but javaScript clam we can't change the charactor pf the given string.*/