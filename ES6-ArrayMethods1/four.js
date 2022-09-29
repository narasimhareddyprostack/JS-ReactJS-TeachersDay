let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let new_Even_Number = numbers.map((number) => {
    return number % 2 == 0
})
console.log(numbers)
console.log(new_Even_Number)