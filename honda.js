//inheritance --using carInheritance , carInheritance is parent class

import { carInheritance } from "./carInheritance.js";
class honda extends carInheritance{
    constructor(colour,model,price){
      super(price,model)
      this.colour = colour
    }
    hondaDetails(){
       console.log("Model : " + this.model + " , Colour : " + this.colour + " , Price : " + this.price)
    }
}
const carObj = new honda("Black","Hero",1500000)
carObj.hondaDetails()
carObj.displayCarDetails()
const car = new carInheritance(300000,"tata")
car.displayCarDetails()

//not able to access parent methods from child but we can access child through parents 

//single inheritnce,hirarchy,multiple,multilevel

//task

//hirarchy inheriatnce
//flower calss - parent class
//rose - child class
//jasmine- child claas