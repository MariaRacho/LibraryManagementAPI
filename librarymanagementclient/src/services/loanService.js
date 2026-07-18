const API_URL = "https://localhost:7072/api/Loan";

export async function getLoans() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Could not fetch loans.");
    }

    return await response.json();
}

export async function createLoan(loan) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loan)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    return await response.json();
}

export async function updateLoan(id, loan) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loan)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
}

export async function deleteLoan(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
}