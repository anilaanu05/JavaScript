function display(){
    console.log("This is Display function")
} 
display()

//function with parameter 
function add(a,b){
   // let a = 10
   // let b = 12
    let c = a+b
    console.log(c)
}
add(10,12) //argumnts
add(5,2)
add(9,"8")

//function with returntype and parameter
function sub(p,q){
    let r = p-q
    return r
}
console.log(sub(13,10))
const l = sub(15,5)
console.log(l)

//Anonymous function - function without a name
const multiply = function(c,d){
    return c*d
}
console.log(multiply(2,6))

//Arrow function
// ()=>{}     -- Syntax
const square = (x)=>{return x*x}
console.log(square(5))

//greeting function

function greeting (name)
{
    console.log("Hi " +name)
} 
greeting("anila")

//evenOdd
function evenOdd (num)
{
    if(num%2==0){
        return "even"
    }
    else {
        return "odd"
    }
}
console.log(evenOdd(8))

//return largest number
function largestNumber(l,s)
{
    if(l>s)
    {
        return "large"
    }
    else {
        return "small"
    }
}
console.log(largestNumber(5,9))

//default parameter
function calculatePrice(price, quantity = 2)
{
    return(price * quantity)
}
console.log(calculatePrice(100,3))
console.log(calculatePrice(100))


//anonymous function - function without name 
const divide = (f,g)=>{return f/g}
console.log(divide(20,2))

//fucntion call another function
function getTotal(prc, qty){
    let tot = (prc * qty)
    return tot
}
    function applyDiscount(total, discount)
    {
        return (total - discount)
    }
    let amnt =getTotal(200,2)
    let finalPrice = applyDiscount(amnt ,100)

    console.log("total", amnt)
    console.log("finalprice" , finalPrice)


    //function calculate mark
    function calculateMarks(mark1, mark2, mark3) {
    let tot = mark1 + mark2 + mark3;
    return tot;
}

function calculateAverage(totalavg) {
    let avg = totalavg / 3;
    return avg;
}

let total = calculateMarks(50, 60, 70);

console.log("Total Marks:", total);
console.log("Average:", calculateAverage(total));