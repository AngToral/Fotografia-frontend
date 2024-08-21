const baseUrl = import.meta.env.VITE_BACKEND;

export const getPhoto = async () => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const entry = await response.json();
    return entry;
};

export const getPhotoId = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery/${id}`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const entry = await response.json();
    return entry;
};

export const addPhoto = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const entry = await response.json();
    return entry;
};

export const updatePhoto = async (id, data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery/${id}`, {
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

export const deletePhoto = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery/${id}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
    });
    const entry = await response.json();
    return entry;
};
