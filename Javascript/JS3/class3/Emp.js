class Employee {
    constructor(id, name, sal) {
        console.log("const executing automatically")
        this.eId = id;
        this.eName = name;
        this.eSal = sal
    }

}
let e1 = new Employee(101, "Rahul Gandhi", 45000);
console.log(e1)
let e2 = new Employee(102, "Sonia Gandhi", 55000);

console.log(e2)