import CompB from './CompB'
import CompC from './CompC'
let CompA = () => {

    let eid = 101;
    let ename = "Rahul"
    let eloc = ['Wayanad', 'New Delhi', 'Bangalore']
    let edetails = { email: "rahul@pm.com", sal: "No Salary" }

    return <div>
        <h1>Component - A</h1>
        <hr />
        {/* <CompB message={"GM"} biplob={"GA"} id={eid} name={ename} /> */}
        <CompB id={eid} name={ename} loc={eloc} details={edetails} />
        <hr />
        <CompC one={"one"} two={["S", 'M', 'L']} three={{ id: 900 }} />
    </div>
}
export default CompA