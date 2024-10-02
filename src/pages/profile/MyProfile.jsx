import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Card, Collapse } from "antd";

function MyProfile() {

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.0), rgba(240, 255, 255, 0.10)), url('../../../../images/fondo-profile.png')";
    }, []);

    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    const items = [
        {
            key: '1',
            label: <Typography className="font-display font-bold md:text-2xl">
                Change password
            </Typography>,
            children: "Children de password"
        },
        {
            key: '2',
            label: <Typography className="font-display font-bold md:text-2xl">
                Change email
            </Typography>,
            children: "Children de email"
        },
        {
            key: '3',
            label: <Typography className="font-display font-bold md:text-2xl">
                Send new review email
            </Typography>,
            children: "Children de review"
        },
    ]

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
                <div className="flex justify-center">
                    <Card
                        title={<Typography className="font-display font-bold md:text-2xl">
                            Hello, Nani !!
                        </Typography>}
                        bordered={false}
                        style={{
                            width: 620,
                        }}
                        className="m-8 font-display font-bold"
                    >
                        <Collapse items={items} bordered={false} />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default MyProfile;