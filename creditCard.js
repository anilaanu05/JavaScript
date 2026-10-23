import { paymentPoly } from "./paymentPoly.js";

class creditCard extends paymentPoly{
  paymentMethod(){
    console.log("Procesing payment is Credit Card....")
    console.log("Enter the Credit Card Number")
  }
}