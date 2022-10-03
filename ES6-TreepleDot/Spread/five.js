//Spread operator applicable for array and object
let user = {
    id: 101,
    name: "Rahul",
    sal: 45000
}
let new_User = { ...user, loc: ['Wayanad', 'Noida'] }
console.log(user)
console.log(new_User)
