//>>>>>>>>>>>>   Intro of Array   <<<<<<<<<<<<<<<<<<<<<<<
/* Arrays - this is a variable which can hold more than one value */

let marks_class_12th = [91, 45, 85, 56, 89, 79, null]
console.log(marks_class_12th)

// output -  [91, 45, 85, 56, 89, 79, null]

//how to acces the index value ?
let marks_class_12 = [91, 45, 85, 56, 89, 79, null]
marks_class_12th[7] = 65               //Adding the new marks_class_12th
marks_class_12th[5] = 100              // Changing the marks_class_12th

console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12th[7])



/*output -
91
45
85
56
89
100
null

*/


// how to calculate the length of the arrys 
let markss_class_12th = [91, 45, 85, 56, 89, 79, null]
console.log("The length of makrs_12th is ",marks_class_12th.length)

// output - The length of makrs_12th is  7


// Note :-   Arrays is object type 


// Task-  How to print Array to use for loop ?
let marks = [91, 82, 83, 84, 95];
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]); // here i represents index
}

/* output- 
91
82
83
84
95
*/

// >>>>>>>>>>>>>>> Method of Array <<<<<<<<<<<<<<<<<<<<<<

// toString() method
let num = [1, 2, 3, 4, 5]
let b = num.toString()  //b is now a strintg
console.log(b)

// output- 1,2,3,4,5

// join() method
let numb = [1, 2, 3, 4, 5]
let c = numb.join("_")
console.log(c)

//Output- 1_2_3_4_5


// pop() method  (it use to remove last index value)
let number = [1, 2, 3, 4, 5]
number.pop()
console.log(number)

// output - [ 1, 2, 3, 4 ]

// it returns pop elements
let numbe = [1, 2, 3, 4, 5]
let r = numbe.pop()
console.log(numbe, r)

//output - [ 1, 2, 3, 4 ] 5

// push() method - it use to push index value and it return new array length
let numbers = [1, 2, 3, 4, 5]
number.push(86)
console.log(numbers)

//output-  [ 1, 2, 3, 4, 5, 86 ]


// shift() method ---- it remove first elements and return it 
let N = [1, 2, 3, 4, 5]
N.shift()
console.log(N)

//output- [ 2, 3, 4, 5 ]    


// unshift() method ---- Add elements to the begining returns new array length
let m = [1, 2, 3, 4, 5]
m.unshift(89)
console.log(m)
//output- [ 89, 1, 2, 3, 4, 5 ]


//delete() operator ---- Array elements can be delete to use of delete operator
let num1 = [1, 2, 3, 4, 5, 6, 7]
delete num1[0]
console.log(num1)

//output- [ <1 empty item>, 2, 3, 4, 5, 6, 7 ]

//concat() method ---- it used to join arrays to the given array
let num3 = [1, 2, 3, 4, 5, 6, 7]
let num_more = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
let newArray = num3.concat(num_more)
console.log(newArray)

/*output- 
[
  1, 2, 3, 4, 5, 6,
  7, 1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
// Note:-   Returns it a new array but doesn't change existing one


// short() Method----- it use to short an array alphabetically 
let num4 = [21, 28, 24, 26, 27, 22, 257]
num4.sort()
console.log(num4)

/*output - 
[
  21, 22, 24, 257,
  26, 27, 28
]
*/ 

/*Note:-  sort() take an optional compare function. if this function is provided as the first arguments,
           the sort() function will consider these value (the value returns from the compare from the compare function)
           as the basis of sorting.
*/
let compare = (a, b)=>{
    return a - b
  }
  let num5 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
  num4.sort(compare)
  console.log(num5)

/*output -  
[
   3,  5,   6,   7, 8,
  14, 22, 229, 551
]

*/

//reverse()  method  ----- it use to reverse 
let num6 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num6.reverse()
console.log(num6)

/* output-
[
  229, 8,  7,   6, 5,
   14, 3, 22, 551
]
*/


// splice() method _- it use to add add new items to an array 
let num7 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num7.splice(2, 3, 1021, 1022, 1023)    // Arguments-------start from 2 index, delete 3 index, add value 1021, 1022, 1023
console.log(num7)

/*output-
[
   551, 22, 1021, 1022,
  1023,  6,    7,    8,
   229
]
*/

//Note - it returns delete item and modified the source array

let num7 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
deleteValues = num7.splice(2, 3, 1021, 1022, 1023)
console.log(num7)
console.log(deleteValues)

/*output-
[
   551, 22, 1021, 1022,
  1023,  6,    7,    8,
   229
]
[ 3, 14, 5 ]   this is the deletd items and it is a object 

*/


//slice() method - slice out a piece from an array it react as a new array.
let num8 = [551, 22, 3, 14, 5, 6, 7, 8, 229]

newNum = num8.slice(2, 7)  //it print from 2 index till 7 index
console.log(newNum)   


/*output- 

[ 3, 14, 5, 6, 7 ]

*/