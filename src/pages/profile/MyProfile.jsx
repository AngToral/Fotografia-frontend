import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

function MyProfile() {

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.40), rgba(240, 255, 255, 0.40)), url('../../../../images/fondo-profile.png')";
    }, []);

    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex justify-between flex-wrap">
                    <div className="flex justify-start mx-6">
                        <button variant="text" className="link font-display text-foto-900 m-4 md:text-xl font-bold" onClick={handleHome}>
                            Home
                        </button>
                    </div>
                    <div className="flex justify-end mx-6">
                        <button variant="text" className="flex items-center link font-display text-foto-900 m-4 md:text-xl font-bold">
                            <IoIosLogOut className="mr-2" /> Logout
                        </button>
                    </div>
                </div>
                <div>
                    <Typography className="m-8">
                        Cambiar contraseña
                    </Typography>
                    <Typography className="m-8">
                        Cambiar email
                    </Typography>
                    <Typography className="m-8">
                        Enviar correo de nueva reseña
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default MyProfile;