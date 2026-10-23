export class paymentPoly{

    constructor(paymentMode){
        this.paymentMode=paymentMode
    }

    paymentMethod(){
        console.log("Selected Payment Method: " +this.paymentMode)
    }
}