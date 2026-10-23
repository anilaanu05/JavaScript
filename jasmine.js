import { flower } from "./flower.js";
class rose extends flower{
    constructor(colour,name,quantity,bunchSize){
        super(colour,name,quantity)
        this.bunchSize=bunchSize
    }
    jasmineDetails(){
        console.log("colour: "+this.colour , 
            ",Name: "+this.name , 
            ", quantity: "+this.quantity , 
            " , bunchSize: "+this.bunchSize)
    }

}
const jasmineObj = new rose("white","jasmine",100,50)
jasmineObj.displayFlowerDetails()
jasmineObj.jasmineDetails()