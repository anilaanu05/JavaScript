class taskBankAccount{
    accountNumber: number
    accountHolderName: string
    balance: number
    transactionStatus: string

    constructor(accountNumber : number, accountHolderName : string, balance : number, transactionStatus : string){ 
       this.accountNumber = accountNumber
       this.accountHolderName = accountHolderName
       this.balance = balance
       this.transactionStatus = transactionStatus
    }

    displayAccountDetails(){
        console.log("Account Number: " + this.accountNumber)
        console.log("Account Holder Name: " + this.accountHolderName)
        console.log("Balance: " + this.balance)
    }
}

const taskBankAccountObj = new taskBankAccount(123456, "John Doe", 1000.50, "Active")
taskBankAccountObj.displayAccountDetails()
