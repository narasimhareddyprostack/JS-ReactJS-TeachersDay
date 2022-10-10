let cars = [{ name: "i20", brand: "Hyndai", price: 700000, color: 'white' },
{ name: "i20", brand: "Maruthi", price: 800000, color: 'red' },
{ name: "Punch", brand: "Tata", price: 500000, color: 'white' },
{ name: "Creta", brand: "Hyndai", price: 1700000, color: 'red' },
{ name: "Swift", brand: "Maruthi", price: 700000, color: 'white' },
{ name: "i10", brand: "Hyndai", price: 700000, color: 'white' },
{ name: "X1", brand: "BMW", price: 4000000, color: 'Blue' },
{ name: "Nexon", brand: "Tata", price: 1700000, color: 'red' },
{ name: "i20", brand: "Maruthi", price: 700000, color: 'Blue' }
]
//display white 
//display only red
let new_Cars = cars.map((car) => {
    return car.color == "white" && car.brand == "Hyndai"
})
console.log(new_Cars)