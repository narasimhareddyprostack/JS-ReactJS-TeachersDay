//ES6
//import Account from './Account'

//ES5 
const Account = require('./Account')
class Savings_Account extends Account {

}
let s1 = new Savings_Account();
console.log(s1.min_Bal)