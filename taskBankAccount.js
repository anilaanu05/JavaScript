"use strict";
class taskBankAccount {
    accountNumber;
    accountHolderName;
    balance;
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    displayAccountDetails() {
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder Name: " + this.accountHolderName);
        console.log("Balance: " + this.balance);
    }
}
const taskBankAccountObj = new taskBankAccount(123456, "John Doe", 1000.50);
taskBankAccountObj.displayAccountDetails();
