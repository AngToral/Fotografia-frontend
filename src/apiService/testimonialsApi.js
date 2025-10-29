const baseUrl = import.meta.env.VITE_BACKEND;

export const getOpinion = async () => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const opinion = await response.json();
    return opinion;
};

export const getOpinionId = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials/${id}`, {
        headers: { authorization: `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const opinion = await response.json();
    return opinion;
};

export const addOpinion = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const opinion = await response.json();
    return opinion;
};

export const updateOpinion = async (id, data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
    const opinion = await response.json();
    return opinion;
};

export const deleteOpinion = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials/${id}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
    });
    const opinion = await response.json();
    return opinion;
};

export const sendReseñaEmail = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials/solicituresena`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const error = new Error('HTTP Error')
        error.response = { status: response.status }
        throw error
    }

    const user = await response.json();
    return user;
}

export const sendReviewEmail = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/testimonials/reviewrequest`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const error = new Error('HTTP Error')
        error.response = { status: response.status }
        throw error
    }

    const user = await response.json();
    return user;
}
