import React, { Component, Fragment } from 'react'

class Registration extends Component {
    state = {
        userName: "",
        email: "",
        mobile: "",
        password: ""
    }
    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return <Fragment>

            <h1>Registration Component</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>User Name:</label>
                <input type="text" onChange={this.updateHandler} name="userName" /> <br /><br />
                <label>Email Id:</label>
                <input type="email" onChange={this.updateHandler} name="email" /> <br /><br />
                <label>Mobile Number:</label>
                <input type="number" onChange={this.updateHandler} name="mobile" /> <br /><br />
                <label>Password</label>
                <input type="text" onChange={this.updateHandler} name="password" /> <br /><br />
                <input type="submit" />
            </form>
        </Fragment>
    }
}

export default Registration
