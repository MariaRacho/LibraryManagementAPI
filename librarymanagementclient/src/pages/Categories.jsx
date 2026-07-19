import { useEffect, useState } from "react";
import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService";
import "../styles/Books.css";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Category name is required.");
            return;
        }

        const category = {
            name
        };

        try {
            if (editingId === null) {
                await createCategory(category);
            } else {
                await updateCategory(editingId, category);
                setEditingId(null);
            }

            setName("");
            loadCategories();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteCategory(id);
            loadCategories();
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(category) {
        setEditingId(category.id);
        setName(category.name);
    }

    return (
        <div className="page-container">

            <div className="page-header">
                <h1>📂 Categories</h1>
                <p>Manage all categories in your library.</p>
            </div>

            <div className="card form-card">

                <h2>
                    {editingId === null ? "Add Category" : "Edit Category"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Category Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button className="save-btn" type="submit">
                        {editingId === null ? "Add Category" : "Save Changes"}
                    </button>

                </form>

            </div>

            <div className="card table-card">

                <h2>Category List</h2>

                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Books</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {categories.map(category => (

                            <tr key={category.id}>

                                <td>{category.name}</td>

                                <td>{category.bookCount}</td>

                                <td>

                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(category)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(category.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Categories;