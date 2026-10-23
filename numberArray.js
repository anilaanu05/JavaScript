let numbers= [6,8,10,12,14]
console.log(numbers.length)
console.log(numbers[1])
numbers.push(16,18) //adding two values to end
console.log(numbers)
numbers.pop() //removing one value from end
console.log(numbers)
numbers.unshift(2,4) //adding values to beginning
console.log(numbers)
numbers.shift()//removing the elmnt from beginning
console.log(numbers)

let sliceNumbers = numbers.slice(1,4)//craeting subarray(satrts with index 1 and ends before index 4)
console.log(sliceNumbers)

let spliceNumbers=[1,2,3,4,5]
spliceNumbers.splice(0,2) //starting index as 0 and remove 2 elmnts
console.log(spliceNumbers)
spliceNumbers.splice(1,1,10) //starting index 1,remove 1 elemnt and add value 10
console.log(spliceNumbers)

//for of loop
for(let num of numbers){
    console.log(num)
}
console.log(spliceNumbers)

console.log("Reduce using for of loop")
let sum=0
for(let numb of spliceNumbers){
    sum=sum+numb
    //console.log(numb)
}
console.log(sum)

//Reduce method - Reduce whole array in to single value
console.log("Reduce Method")
const reduceElement = spliceNumbers.reduce((total,value)=>total+value,2)
console.log(reduceElement)

//filter method - 
console.log("filter method") 
const evenArray=numbers.filter((i)=>i%2==0)
console.log(evenArray)

//map method -
console.log("map method")
const mapArray = numbers.map((j)=>j*2)
console.log(mapArray)

//task 
console.log("using all three methods")
let mark=[25,48,47,32,33]
let newMark=mark.filter((p)=>p%2!=0).map((q)=>q*5).reduce((tot,val)=>tot+val)
console.log(newMark)

//practice 
let price = [100,250,50,400,150]
const filterprice = price.map((p)=>p * 1.18).reduce((g,h)=>g+h)
console.log(filterprice)

let transactions = [
    { name: "Transfer", amount: 500, status: "Success" },
    { name: "Deposit", amount: 1000, status: "Failed" },
    { name: "Payment", amount: 300, status: "Success" },
    { name: "Withdrawal", amount: 700, status: "Success" }
];
const tranresult = transactions.filter(transactions=>transactions.status==="Success").reduce((total,transactions)=>total+transactions.amount,0)
console.log(tranresult)


