class BankAccount{
    private static nextId: number = 1;
    public id: number;
    private balance: number;
    private static rate: number = 0.02;

    
    constructor(balance: number) {
        this.balance = balance;
        this.id = BankAccount.nextId++;
        console.log(`Account ID${this.id} created`)
        
    }

    public static setInterestRate(newRate: number){
        BankAccount.rate = newRate;
    }

    getInterest(years: number){
        return BankAccount.rate * years * this.balance;
    }   

    deposit(amount: number){
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`)
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
    ]
const accounts: BankAccount[] = [];

function create(){
    const newAccount: BankAccount =  new BankAccount(0);
    accounts.push(newAccount);
}

function deposit(id: number, amount: number){
    const account: BankAccount | undefined = accounts.find(account => account.id === id);
    if (account){
        account.deposit(amount)
    }else if (account === undefined){
        console.log("Account does not exist")
    }
    console.log(account);
    
}
function getInterest(id: number, years: number){
    const account: BankAccount | undefined = accounts.find(account => account.id === id);
    if (account){
        console.log(account.getInterest(years))
    }else{
        console.log("Account does not exist")
    }
}


for (let cmd of Commands){
    
    let splitCmd = cmd.split(" ");
    
    if (splitCmd[0] === "Create"){
        create();
    }
    else if (splitCmd[0] === "Deposit"){
        let id = Number(splitCmd[1]);
        let amount = Number(splitCmd[2]);
        deposit(id, amount);
    }
    else if (splitCmd[0] === "GetInterest"){
        let id: number = Number(splitCmd[1]);
        let years: number = Number(splitCmd[2]);
        getInterest(id, years);
    }else if (splitCmd[0] === "SetInterest"){
        let rate: number = Number(splitCmd[1]);
        BankAccount.setInterestRate(rate);
    }

}


console.log(accounts);
