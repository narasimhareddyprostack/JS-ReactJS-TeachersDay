class Account {
    // properties and methods
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully")
    }
    get_Statement() {
        console.log("Getting the St")
    }
    get_Bal() {
        console.log("No Balance")
    }
    withdrawl() {
        console.log("First Deposit and withdrawl")
    }
    close_Account() {
        console.log("Close Account")
    }
}
let a1 = new Account();
console.log(a1.min_Bal)
a1.open_Account();
a1.deposit_Amount()
a1.get_Statement()
a1.get_Bal()
a1.withdrawl()
a1.close_Account()
