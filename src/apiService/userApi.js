const baseUrl = import.meta.env.VITE_BACKEND;

export const getUser = async (id) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/${id}`, {
        headers: { "authorization": `Bearer ${token}` }, // ponemos en headers el token generado
    });
    const user = await response.json();
    return user;
};

export const login = async (email, password) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const logged = await response.json();
    return logged;
};

export const addUser = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const newUser = await response.json();
    return newUser;
};

export const updateUser = async (id, data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const user = await response.json();
    return user;
};

export const forgotPasswordEmail = async (email) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/forgottenpassword`, {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const user = await response.json();
    return user;
}

export const sendContactEmail = async (data) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/clientcontact`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const user = await response.json();
    return user;
}

export const sendChangePassword = async (email) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/changepassword`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const user = await response.json();
    return user;
}

export const sendChangeEmail = async (email) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${baseUrl}/user/changeemail`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    });
    const user = await response.json();
    return user;
}