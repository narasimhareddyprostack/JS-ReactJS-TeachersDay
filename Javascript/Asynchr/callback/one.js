let calc = (a, b, operation) => {
    if (operation == "sum") {
        return a + b
    }
    if (operation == "multi") {
        return a * b
    }
}
console.log(calc(10, 20, "sum"))
//while invoking a function, we are passing argu
console.log(calc(10, 20, "multi"))