const API_URL = "https://localhost:7072/api/Book";

function getAuthHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
}

export async function getBooks() {
    const response = await fetch(API_URL, {
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    return await response.json();
}

export async function createBook(book) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(book)
    });

    if (!response.ok) {
        throw new Error("Failed to create book");
    }

    return await response.json();
}

export async function deleteBook(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to delete book");
    }
}

export async function updateBook(id, book) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(book)
    });

    if (!response.ok) {
        throw new Error("Failed to update book");
    }
}