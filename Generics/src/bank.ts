abstract class CreateAccount<BankName, BankID> {
    protected constructor(protected bankName: BankName, protected bankID: BankID) {}

    abstract showDetails(): string;
}

class PersonalAccount<BankName, BankID> extends CreateAccount<BankName, BankID> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: { [key: string]: number } = {};

    constructor(bankName: BankName, bankID: BankID, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.money += amount;
    }

    expense(amount: number, expenseType: string): void {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        } else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }

    showDetails(): string {
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
