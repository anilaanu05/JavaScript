import { paymentPoly} from "./paymentPoly.js";

class paymentOption extends paymentPoly{
  gpay(){
    console.log("Procesing payment is GPay....")
    console.log("Enter the UPI ID")
  }

    phonepay(){
    console.log("Procesing payment is Phone Pay....")
    console.log("Enter the Phone Pay ID")
  }
  
   creditcard(){
    console.log("Procesing payment is Credit Card....")
    console.log("Enter the Credit card")
  }

  debitCard(){
    console.log("Procesing payment is Debit Card....")
    console.log("Enter the Debit card")
  }

}

const paymentOptionObj = new paymentOption("PhonePay")
paymentOptionObj.paymentMethod()
paymentOptionObj.phonepay()



