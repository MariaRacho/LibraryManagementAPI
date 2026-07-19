import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">

            <div className="home-card">

                <h1>📚 Library Management System</h1>

                <p className="home-description">
                    Welcome to the Library Management System.
                    Manage books, categories and loans in one simple application.
                </p>

                <div className="home-buttons">

                    <Link className="home-button" to="/login">
                        Login
                    </Link>

                    <Link className="home-button secondary-button" to="/register">
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Home;