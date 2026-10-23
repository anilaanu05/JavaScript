export class carInheritance{
    constructor(price,model){
        this.price=price
        this.model=model
    }
    displayCarDetails(){
        console.log("Car Model is: " +this.model)
        console.log("Car Price is: " +this.price)
    }
}
