let CompB = (props) => {

    return <div>
        <h1>Component - B</h1>
        <pre>{JSON.stringify(props)}</pre>

        <h2>Employee Id: {props.id} </h2>
        <h2>Employee Name: {props.name} </h2>
        <h2>Employee Loc :{props.loc[0]}</h2>
        <h3>Email Id:{props.details.email}</h3>
    </div>
}
export default CompB