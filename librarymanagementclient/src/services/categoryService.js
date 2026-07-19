const API_URL = "https://localhost:7072/api/Category";

function getAuthHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
}

export async function getCategories() {
    const response = await fetch(API_URL, {
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return await response.json();
}

export async function createCategory(category) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(category)
    });

    if (!response.ok) {
        throw new Error("Failed to create category");
    }

    return await response.json();
}

export async function updateCategory(id, category) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(category)
    });

    if (!response.ok) {
        throw new Error("Failed to update category");
    }
}

export async function deleteCategory(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to delete category");
    }
}