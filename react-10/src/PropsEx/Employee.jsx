import React, { Component } from 'react'

class Employee extends Component {
    render() {
        return (
            <div>
                <h2>Employee - Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>Emp Id:{this.props.id}</h1>
                <h1>Emp Name:{this.props.name}</h1>
                <h1>Emp Name:{this.props.loc[1]}</h1>
                <h4>Salary:{this.props.details.sal}</h4>
            </div>
        )
    }
}

export default Employee
