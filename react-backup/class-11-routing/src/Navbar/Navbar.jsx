import { Link } from 'react-router-dom'
let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">React Rounting Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
}
export default Navbar