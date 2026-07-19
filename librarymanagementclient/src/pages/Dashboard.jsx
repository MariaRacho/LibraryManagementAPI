import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../services/bookService";
import { getCategories } from "../services/categoryService";
import { getLoans } from "../services/loanService";
import "../styles/Dashboard.css";

function Dashboard() {
    const [bookCount, setBookCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [loanCount, setLoanCount] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {
        try {
            const books = await getBooks();
            const categories = await getCategories();
            const loans = await getLoans();

            setBookCount(books.length);
            setCategoryCount(categories.length);
            setLoanCount(loans.length);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="dashboard-container">

            <div className="dashboard-header">
                <h1>📚 Library Management Dashboard</h1>

                <p>
                    Welcome! Use the cards below to manage books,
                    categories and loans.
                </p>
            </div>

            <div className="dashboard-grid">

                <Link to="/books" className="dashboard-card">
                    <h2>📚</h2>
                    <h3>Books</h3>
                    <p>{bookCount} books in the library</p>
                    <span>Open →</span>
                </Link>

                <Link to="/categories" className="dashboard-card">
                    <h2>📂</h2>
                    <h3>Categories</h3>
                    <p>{categoryCount} categories available</p>
                    <span>Open →</span>
                </Link>

                <Link to="/loans" className="dashboard-card">
                    <h2>📖</h2>
                    <h3>Loans</h3>
                    <p>{loanCount} registered loans</p>
                    <span>Open →</span>
                </Link>

            </div>

        </div>
    );
}

export default Dashboard;