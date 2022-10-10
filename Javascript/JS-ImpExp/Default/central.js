let tax = 18;
let discount = 5;
//ES5
//module.exports = tax  // default 
module.exports = { tax, discount }     //named export 

/*
//ES6

export default tax;  // single value - default exp
export { tax, discount }//multiple valeus - named

*/