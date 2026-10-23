/*task - ecommerce Submit time payment option - useImperativeHandle, phonepay,creditcard,debit card
class payment 
gpay, phonepay,creditcard 
if the user select gpay gpay functionality should work*/


class ecommerceEncapsulation {

    constructor(paymentMethod){
        this.paymentMethod=paymentMethod
    }

    gpay(){
        console.log("Processing the payment using GPay...")
        console.log("Enter the UPI ID")
    }

    creditCard(){
        console.log("Processing the payment using Credit Card...")
        console.log("Enter the Credit Card details")
    }

    phonePay(){
        console.log("Processing the payment using Phone Pay...")
        console.log("Enter the Phone Pay ID")
    }

    debitCard(){
        console.log("Processing the payment using Debit Card...")
        console.log("Enter the Debit Card details")
    }

    payment(){
        if(this.paymentMethod=='gpay'){
           this.gpay() 
        }
        else if(this.paymentMethod=='creditCard'){
           this.creditCard()
        }
        else if (this.paymentMethod=='phonePay'){
           this.phonePay()
        }
        else if (this.paymentMethod=='debitCard'){
           this.debitCard()
        }
        else{
            console.log("Invalid Payment Method")
        }
    }

}

const ecommerceEncapsulationObj = new ecommerceEncapsulation("gpay")
ecommerceEncapsulationObj.payment()