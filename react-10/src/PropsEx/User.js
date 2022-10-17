import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {
    uid = 201;
    uname = "Priyanka"
    uloc = ['DLF', 'London']
    udetails = { email: "p@pm.com", sal: '10 CR' }
    render() {
        return (
            <div>
                <h2>User - Component.....</h2>
                <hr />
                <Employee details={this.udetails} loc={this.uloc} one={"GM"} two={"GN"} id={this.uid} name={this.uname} />
            </div>
        )
    }
}

export default User
