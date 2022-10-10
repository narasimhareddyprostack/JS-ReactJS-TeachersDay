class Account {
    min_Bal = 500;
    amount;
    open_Account() {
        console.log("Open Account - Successfully")
    }
    deposit_Amount(money) {
        this.amount = money
    }
}

let v = new Account()
v.open_Account()
v.deposit_Amount(50000)
console.log(v)
let j = new Account();
j.deposit_Amount(10000000)
console.log(j)