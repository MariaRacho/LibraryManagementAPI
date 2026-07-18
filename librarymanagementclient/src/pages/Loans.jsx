import { useEffect, useState } from "react";
import {
    getLoans,
    createLoan,
    updateLoan,
    deleteLoan
} from "../services/loanService";
import "../styles/Books.css";

function Loans() {
    const [loans, setLoans] = useState([]);
    const [loanDate, setLoanDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [bookId, setBookId] = useState("");
    const [userId, setUserId] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadLoans();
    }, []);

    async function loadLoans() {
        try {
            const data = await getLoans();
            setLoans(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const loan = {
            loanDate,
            returnDate: returnDate || null,
            bookId: Number(bookId),
            userId
        };

        try {
            if (editingId === null) {
                await createLoan(loan);
            } else {
                await updateLoan(editingId, loan);
                setEditingId(null);
            }

            setLoanDate("");
            setReturnDate("");
            setBookId("");
            setUserId("");

            loadLoans();
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteLoan(id);
            loadLoans();
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(loan) {
        setEditingId(loan.id);
        setLoanDate(loan.loanDate.substring(0, 10));
        setReturnDate(loan.returnDate ? loan.returnDate.substring(0, 10) : "");
        setBookId(loan.bookId);
        setUserId(loan.userId);
    }

    return (
        <>
            <div className="book-form">
                <h2>{editingId === null ? "Add Loan" : "Edit Loan"}</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="date"
                        value={loanDate}
                        onChange={(e) => setLoanDate(e.target.value)}
                    />

                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Book ID"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />

                    <button className="save-btn" type="submit">
                        {editingId === null ? "Add Loan" : "Save Changes"}
                    </button>
                </form>
            </div>

            <div className="book-table">
                <h2>Loans</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Loan Date</th>
                            <th>Return Date</th>
                            <th>Book ID</th>
                            <th>User ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loans.map((loan) => (
                            <tr key={loan.id}>
                                <td>{loan.loanDate.substring(0, 10)}</td>
                                <td>
                                    {loan.returnDate
                                        ? loan.returnDate.substring(0, 10)
                                        : "-"}
                                </td>
                                <td>{loan.bookId}</td>
                                <td>{loan.userId}</td>

                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(loan)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(loan.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Loans;