let mark:number = 25
let subject:string = "Maths"
let isPassed:boolean = true

let age:number = 25
//age = "twentyfive" - cannot update due to type safety

function getMark(mark:number):void {
 console.log(mark)
}
getMark(75) 

function getTotalmark(mark1:number,mark2:number):number{
     return mark1+mark2 
}
console.log(getTotalmark(65,80))

function printHello(){
    console.log("print hello")
}
printHello()

//arrays
let numbers:number[] = [10,20,30]

let fruits : string[] = ["apple","grapes","orange"]
let person : {name:string,age: number, city:string} = {
    name : "Anila", age : 30 , city : "Thrissur"
}
console.log(numbers)
console.log(fruits)
console.log(person)

