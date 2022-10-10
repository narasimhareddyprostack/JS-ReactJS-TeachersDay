class Account {
    min_Bal = 500
    get_Account_Details() {
        console.log("Account Class - get_Account_Details")
    }
}
class Savings_Account extends Account {
    withdraw() {
        console.log("Super Buddy, Pls Withdraw and Go Movie")
    }
}
class Current_Account extends Account {
    pay_Bill_First() {
        console.log("Paying now, dont call.DND")
    }
}

let sa1 = new Savings_Account()
console.log(sa1.min_Bal)
sa1.get_Account_Details()

let ca1 = new Current_Account();
ca1.get_Account_Details()