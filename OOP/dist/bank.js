"use strict";
class BankAccount {
    static nextId = 1;
    id;
    balance;
    static rate = 0.02;
    constructor(balance) {
        this.balance = balance;
        this.id = BankAccount.nextId++;
        console.log(`Account ID${this.id} created`);
    }
    static setInterestRate(newRate) {
        BankAccount.rate = newRate;
    }
    getInterest(years) {
        return BankAccount.rate * years * this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`);
    }
}
const Commands = [
    "Create",
    "Create",
    "Deposit 1 20",
    " Deposit 3 20",
    "Deposit 2 10",
    "SetInterest 1.5",
    "GetInterest 1 1",
    "GetInterest 2 1",
    "GetInterest 3 1",
    "End"
];
const accounts = [];
function create() {
    const newAccount = new BankAccount(0);
    accounts.push(newAccount);
}
function deposit(id, amount) {
    const account = accounts.find(account => account.id === id);
    if (account) {
        account.deposit(amount);
    }
    else if (account === undefined) {
        console.log("Account does not exist");
    }
    console.log(account);
}
function getInterest(id, years) {
    const account = accounts.find(account => account.id === id);
    if (account) {
        console.log(account.getInterest(years));
    }
    else {
        console.log("Account does not exist");
    }
}
for (let cmd of Commands) {
    let splitCmd = cmd.split(" ");
    if (splitCmd[0] === "Create") {
        create();
    }
    else if (splitCmd[0] === "Deposit") {
        let id = Number(splitCmd[1]);
        let amount = Number(splitCmd[2]);
        deposit(id, amount);
    }
    else if (splitCmd[0] === "GetInterest") {
        let id = Number(splitCmd[1]);
        let years = Number(splitCmd[2]);
        getInterest(id, years);
    }
    else if (splitCmd[0] === "SetInterest") {
        let rate = Number(splitCmd[1]);
        BankAccount.setInterestRate(rate);
    }
}
console.log(accounts);
