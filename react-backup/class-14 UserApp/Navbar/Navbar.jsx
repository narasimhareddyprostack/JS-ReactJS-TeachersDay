import React from 'react'
import { Link } from 'react-router-dom'
let Navbar = () => {
    return <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">React - User Component</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/users">Users</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/product">Product - useState</Link></li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
}
export default Navbar;