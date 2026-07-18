import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Library Management System
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/books">Books</Link>
                </li>

                <li>
                    <Link to="/categories">Categories</Link>
                </li>

                <li>
                    <Link to="/loans">Loans</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;