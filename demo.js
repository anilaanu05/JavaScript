"use strict";
let mark = 25;
let subject = "Maths";
let isPassed = true;
let age = 25;
//age = "twentyfive" - cannot update due to type safety
function getMark(mark) {
    console.log(mark);
}
getMark(75);
function getTotalmark(mark1, mark2) {
    return mark1 + mark2;
}
console.log(getTotalmark(65, 80));
function printHello() {
    console.log("print hello");
}
printHello();
//arrays
let numbers = [10, 20, 30];
let fruits = ["apple", "grapes", "orange"];
let person = {
    name: "Anila", age: 30, city: "Thrissur"
};
console.log(numbers);
console.log(fruits);
console.log(person);
