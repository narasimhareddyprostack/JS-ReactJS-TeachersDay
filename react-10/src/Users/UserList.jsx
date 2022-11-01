import React from 'react'

const UserList = (props) => {
    let selectedUserHandler = (user) => {
        console.log(user)
        props.selectedUser(user)
    }
    return (
        <div className="container">
            <h1>User List</h1>
            <pre>{JSON.stringify(props.users)}</pre>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.users.map((user) => {
                                    return <tr key={user.id} onMouseOver={selectedUserHandler.bind(this, user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList
