let fruits=["Mango","Apple","Avacado","Grapes"]
//console.log(fruits)
// position = index (strting with 0,1,2,etc..)
console.log(fruits.length)
console.log(fruits[2])
//push - adding values to end  banana 
fruits.push("Banana","Pineapple")
console.log(fruits)
//pop - removing the value from end
fruits.pop()
console.log(fruits)
//unshift - adding new elmnt to starting 
fruits.unshift("kiwi")
console.log(fruits)
//shift - removing the elemnt from starting
fruits.shift()
console.log(fruits)
//slice - for creating subarray
let slicearray = fruits.slice(1,5)
console.log(slicearray) 
//splice - removing or adding values
fruits.splice(2,0,"Guva") // index
console.log(fruits)
fruits.splice(3,2,"Strawberry")
console.log(fruits)
//using for
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i])
}

// Task : decalre a number array