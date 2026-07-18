import { useEffect, useState } from "react";
import {
    getBooks,
    createBook,
    deleteBook,
    updateBook
} from "../services/bookService";
import "../styles/Books.css";

function Books() {
    const [books, setBooks] = useState([]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks() {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const book = {
            title,
            author,
            publishedYear: Number(publishedYear),
            categoryId: Number(categoryId)
        };

        try {
            if (editingId === null) {
                await createBook(book);
            } else {
                await updateBook(editingId, book);
                setEditingId(null);
            }

            setTitle("");
            setAuthor("");
            setPublishedYear("");
            setCategoryId("");

            loadBooks();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteBook(id);
            loadBooks();
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(book) {
        setEditingId(book.id);
        setTitle(book.title);
        setAuthor(book.author);
        setPublishedYear(book.publishedYear);
        setCategoryId(book.categoryId);
    }

    return (
        <>
            <div className="book-form">
                <h2>
                    {editingId === null ? "Add New Book" : "Edit Book"}
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Published Year"
                        value={publishedYear}
                        onChange={(e) => setPublishedYear(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Category Id"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    />

                    <button className="save-btn" type="submit">
                        {editingId === null ? "Add Book" : "Save Changes"}
                    </button>
                </form>
            </div>

            <div className="book-table">
                <h2>Books</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publishedYear}</td>
                                <td>{book.categoryId}</td>

                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(book)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(book.id)}
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

export default Books;