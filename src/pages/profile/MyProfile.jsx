import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

function MyProfile() {

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.0), rgba(240, 255, 255, 0.10)), url('../../../../images/fondo-profile.png')";
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
                        <button variant="text" className="link2 font-display text-foto-200 m-4 md:text-xl font-bold" onClick={handleHome}>
                            Home
                        </button>
                    </div>
                    <div className="flex justify-end mx-6">
                        <button variant="text" className="flex items-center link2 font-display text-foto-200 m-4 md:text-xl font-bold">
                            <IoIosLogOut className="mr-2" /> Logout
                        </button>
                    </div>
                </div>
                <div>
                    <div className="m-8">
                        <Typography className="font-display font-bold md:text-2xl">
                            Change password
                        </Typography>
                    </div>
                    <div className="m-8">
                        <Typography className="font-display font-bold md:text-2xl">
                            Change email
                        </Typography>
                    </div>
                    <div className="m-8">
                        <Typography className="font-display font-bold md:text-2xl">
                            Send new review email
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;