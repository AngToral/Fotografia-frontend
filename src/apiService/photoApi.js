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
    console.log("data: ", data)
    try {
        const response = await fetch(`${baseUrl}/gallery`, {
            method: "POST",
            body: data,
            headers: {
                "authorization": `Bearer ${token}`,
            },
        });
        const newPhoto = await response.json();
        return newPhoto;

    } catch (error) {
        console.log("error: ", error)
        throw error;
    }
}

export const updatePhoto = async (id, data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            "authorization": `Bearer ${token}`,
        },
    });
    const entry = await response.json();
    return entry;
};

export const deletePhoto = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/gallery/${id}`, {
        method: "DELETE",
        headers: { "authorization": `Bearer ${token}` },
    });
    const entry = await response.json();
    return entry;
};
