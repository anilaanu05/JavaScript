import { personPolymorphism } from "./personPolymorphism.js";

class trainerPoly extends personPolymorphism{
  getRoles(){
    console.log("I'm a Trainer")
  }

  introduce(){
    console.log("My name is Anila,I am a software Trainer")
  }
}
const trainerPolyObj = new trainerPoly()
trainerPolyObj.introduce()
trainerPolyObj.getRoles()

const personPolymorphismObj = new personPolymorphism()
personPolymorphismObj.introduce()


/*task - ecommerce Submit time payment option - useImperativeHandle, phonepay,creditcard,debit card
class payment 
gpay, phonepay,creditcard 
if the user select gpay gpay functionality should work*/