let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, [3000]);
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows = rows + `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.sal}</td>
                </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, [1000])
}

createEmployee({ id: 103, name: "Priyanka", sal: 65000 })
getEmployees();