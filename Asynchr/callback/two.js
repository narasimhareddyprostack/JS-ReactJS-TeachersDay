let sum = (a, b) => { return a + b }
let multi = (a, b) => { return a * b }

let calc = (a, b, callback) => {
    return callback(a, b)
}
let r1 = calc(10, 20, sum)
//while invoking a functin, we are passing function as a argument

let r2 = calc(10, 20, multi)
console.log(r1)
console.log(r2)