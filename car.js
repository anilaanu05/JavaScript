//class
//blue print of objects 
class Car{
    // let brand = "Tata Motors"
    detailsDisplay()
    {
        console.log("Car method")
        console.log("car brand is "+this.brand)
        console.log("car price is "+this.price)
    }
    constructor(brand , price) 
    {
        this.brand = brand // value initilization
        this.price = price
        console.log("Constructor Created");
    }
}
const car = new Car("Tata Motors",250000)//stored into a varaible - and the variable should be same as class name std format
car.detailsDisplay()
const car2 = new Car("Honda",150000)
car2.detailsDisplay()
//constructor - A constructor helps you create multiple objects with the same structure but different values.

//task

class studentss {
    sdetails()
    {
        console.log("student name is" +this.sname)
        console.log("student age is" +this.sage)
        console.log("student course is" +this.scousre)
    }
    constructor(sname,sage,scousre){
        this.sname = sname
        this.sage = sage
        this.scousre = scousre
    }
}
const s = new studentss("kiran",21,"maths")
s.sdetails()
const s2 = new studentss("theertha",23,"science")
s.sdetails()

