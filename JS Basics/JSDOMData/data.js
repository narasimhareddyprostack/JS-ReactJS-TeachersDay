let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 },
{ id: 103, name: "Priyanka ", sal: 65000 },
{ id: 104, name: "Modi ", sal: 75000 }]
function displayData() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                        <tr>`
    }
    document.getElementById('abc').innerHTML = rows
}