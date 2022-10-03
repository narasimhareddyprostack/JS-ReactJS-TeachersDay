let user = {
    id: 101,
    name: "Rahul",
    email: "Rahul@gmail.com"
}
let details = {
    email: "rahul@ibm.com",
    sal: 45000,
    loc: "Wayanad"
}
let users_Details = { ...user, ...details }
console.log(users_Details)