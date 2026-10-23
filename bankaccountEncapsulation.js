//wrapping number of data into single unit

class bankaccountEncapsulation{

    #balance  
    accountHolder                  //balance is private - unable to access outside the class
    constructor(currentBalance,accountHolder){
         this.#balance=currentBalance
         this.accountHolder=accountHolder
    }
    showBalance(){
        console.log(this.#balance)
    }
    deposit(depositAmount){
       if(depositAmount>0){
        this.#balance+=depositAmount
       } else
        console.log("this is an invalid depositamount")
    }

    withdraw(withdrawAmount){
       if(withdrawAmount<this.#balance)
        this.#balance-=withdrawAmount
       else{
        console.log("unable to withdraw amount the balance is less than withdrwal amount")
       }
    }
}

const bankaccountEncapsulationObj = new bankaccountEncapsulation(100,"ammu")
bankaccountEncapsulationObj.showBalance()
bankaccountEncapsulationObj.deposit(50)
bankaccountEncapsulationObj.showBalance()
bankaccountEncapsulationObj.withdraw(500)
bankaccountEncapsulationObj.showBalance()
// bankaccountEncapsulationObj.accountHolder="anila" 