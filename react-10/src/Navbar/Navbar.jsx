import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Redux-Thunk Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/user">Users</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
