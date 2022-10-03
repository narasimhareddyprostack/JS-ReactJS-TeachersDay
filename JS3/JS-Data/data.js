let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 },
{ id: 103, name: "Priyanka", sal: 65000 }]
let display_Data = () => {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
            <td>  ${employee.id}</td>
            <td>  ${employee.name}</td>
            <td>  ${employee.sal}</td>
            </tr>`
    }
    //document.getElementById('tbody_Data').innerHTML = "Good Morning Priyanka"
    document.getElementById('tbody_Data').innerHTML = rows
}