import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    state = { users: [] }
    getDataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch()
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <button onClick={this.getDataHandler}>Get Data</button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ? <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr>

                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
