const Account = require('./Account')
class Savings_Account extends Account {
    withdraw() {
        console.log("Super Buddy, Pls Withdraw and Go Movie")
    }
}

let sa1 = new Savings_Account()
console.log(sa1.min_Bal)
sa1.get_Account_Details()

