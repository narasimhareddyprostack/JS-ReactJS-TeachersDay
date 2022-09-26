const Account = require('./Account')
class Current_Account extends Account {
    pay_Bill_First() {
        console.log("Paying now, dont call.DND")
    }
}


let ca1 = new Current_Account();
ca1.get_Account_Details()