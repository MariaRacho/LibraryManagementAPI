import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("token");

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                📚 Library Management
            </div>

            <div className="navbar-links">

                {!isLoggedIn ? (
                    <>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Register
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/books"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Books
                        </NavLink>

                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Categories
                        </NavLink>

                        <NavLink
                            to="/loans"
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                        >
                            Loans
                        </NavLink>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;