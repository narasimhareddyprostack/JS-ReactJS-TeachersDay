class Account {
    // properties and methods
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log(`${amount} Deposited Successfully`)
    }
    get_Bal() {
        return "Server Down"
    }
}
let a1 = new Account();
console.log(a1.min_Bal)
a1.open_Account();
a1.deposit_Amount(50000)
let message = a1.get_Bal()
console.log(message)
