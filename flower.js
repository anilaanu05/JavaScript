export class flower{
    constructor(colour,name,quantity){
        this.colour=colour
        this.name=name
        this.quantity=quantity
    }
    displayFlowerDetails(){
        console.log("flower colour is: " +this.colour)
        console.log("flower name is: " +this.name)
        console.log("flower quantity is: "+this.quantity)
    }
}