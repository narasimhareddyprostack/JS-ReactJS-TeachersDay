class Emplooyee {
    eId;
    eName;
    eSal;
    set_Name(name) {
        this.eName = name
    }
}
let e1 = new Emplooyee();
let e2 = new Emplooyee();
console.log(e1)
console.log(e2)
e1.set_Name("Rahul Gandhi")
e2.set_Name("Sonia Gandhi")
console.log(e1)
console.log(e2)