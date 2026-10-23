//Arithmetic operators : +,-,*/,% 
let a= 12
let b= 10
//let c=a+b
/*console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
//console.log(c)*/

//Assignment Operator : =,+=,-=,/=,%=
//a=a+5
/*a+=5
console.log(a)
a-=2
console.log(a)
a/=6
console.log(a)
a%=8
console.log(a)*/

// Comparison Operator : ==,===,!=,1==,>,<,<=,>=
/*let p=5
let q="5"
console.log(p==q)
console.log(p===q)
console.log(p!=q)
console.log(p!==q)
console.log(10>5)
console.log(10<5)
console.log(10<=10)
console.log(5>=5)*/

//Logical Operators : &&(AND),||(OR),!(NOT) - For checking multiple conditions at a time
let age=12
let has_id=true
console.log(age>=18 && has_id) //AND : if both conditions true then value will return as true
console.log(age>=18 || has_id) //OR : if any one of the condition true then return as true
console.log(!has_id)
console.log(!12)

//Ternary Operators : instead of if else we can use ternary operators
let p=12
const votingResult = (p>=18) ? "Elegible for voting" : "Not Eligible for voting"
console.log(votingResult)