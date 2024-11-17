// arithmetic operators 

//additon
let addOperator = 1+5

//substraction
let subOperator = 1-5

//multiplication
let multiOperator = 5*1

// division
let divOperator = 5/1

//mudulus
let modOperator = 10%3


// assigment operators 

//Additon 
let addassigment = 1 
addassigment += 5 
console.log(addassigment)




// equality operators

let x = 10 
let y = 9

 x== y // loose compare
 x=== y // strict compare 


 // logical operators 
 //AND 
 let age = 23
 let isStudent = true 

 let solution = (age>17) && (isStudent===true)

 //or 

 let solution2 = (age>17) || (isStudent===true)

 //not 

 let solution3 = !isStudent === false

 console.log(solution,solution2,solution3)


// increment and decrement

//increment
let addIt = 1 
addIt++
//decrement
addIt --
addIt++
console.log(addIt)

let firstname = 'John'
let lastname = 'Doe'

let fullname =`${firstname}\n${lastname}`// \n= new line 
console.log(fullname)

//conditonal operator
let age2 = 30
age2 = 15
let teacher= (age2>18) ? 'adult':'minor'
console.log(teacher)