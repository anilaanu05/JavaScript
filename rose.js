import { flower } from "./flower.js";
class rose extends flower{
    constructor(colour,name,quantity,fragrance){
        super(colour,name,quantity)
        this.fragrance=fragrance
    }
    roseDetails(){
        console.log("colour: "+this.colour , ",Name: "+this.name , "quantity: "+this.quantity , " fragrance: "+this.fragrance)
    }

}
const roseObj = new rose("red","rose",20,"mild")
roseObj.displayFlowerDetails()
roseObj.roseDetails()


