import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../redux/users/user.action'
const Users = () => {
    let dispatch = useDispatch();
    let users = useSelector((state) => {
        return state
    })
    useEffect(() => {
        //dispatch an action
        dispatch(fetchUsersAction())
    }, []);
    return (
        <div className="container">
            <h1>User Comp</h1>
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(users).length > 0 ? <>
                                    {
                                        users.users.map((user) => {
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
    )
}

export default Users
