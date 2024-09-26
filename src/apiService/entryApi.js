const baseUrl = import.meta.env.VITE_BACKEND;

export const getEntry = async () => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/blog`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const entry = await response.json();
    return entry;
};

export const getEntryId = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/blog/${id}`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const entry = await response.json();
    return entry;
};

export const addEntry = async (data) => {
    const token = localStorage.getItem("access_token");
    try {
        const response = await fetch(`${baseUrl}/blog`, {
            method: "POST",
            body: data,
            headers: {
                "authorization": `Bearer ${token}`,
            },
        });
        const entry = await response.json();
        return entry;

    } catch (error) {
        throw error;
    }
};

export const updateEntry = async (id, data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
    const entry = await response.json();
    return entry;
};

export const deleteEntry = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/blog/${id}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
    });
    const entry = await response.json();
    return entry;
};
