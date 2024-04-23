"use strict";
class CreateAccount {
    bankName;
    bankID;
    constructor(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    constructor(bankName, bankID, ownerName) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        }
        else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }
    showDetails() {
        const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((acc, val) => acc + val, 0);
        return `Bank name: ${this.bankName}
Bank ID: ${this.bankID}
Owner name: ${this.ownerName}
Money: ${this.money}
Money spent: ${totalMoneySpentOnExpenses}`;
    }
}
let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
