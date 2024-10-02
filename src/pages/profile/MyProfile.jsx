import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Button, Card, Collapse, Input, message } from "antd";
import Loader from "react-js-loader";

function MyProfile() {
    const [clientEmail, setClientEmail] = useState("")
    const [clienteEmail, setClienteEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.0), rgba(240, 255, 255, 0.10)), url('../../../../images/fondo-profile.png')";
    }, []);

    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    const onEmailReview = async () => {
        if (clientEmail === "" && clienteEmail === "") {
            messageApi.open({
                type: 'warning',
                content: "No email"
            })
        } else {
            setLoading(true)

            if (clientEmail !== "") {
                console.log(clientEmail)
                // await sendReviewEmail({ clientName })
            }
            if (clienteEmail !== "") {
                console.log(clienteEmail)
                // await sendReseñaEmail({ clienteName })
            }

            setLoading(false)
            messageApi.open({
                type: 'success',
                content: "Email sent!"
            })
            setClienteEmail("")
            setClientEmail("")
        }
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
            children:
                <>
                    {loading ? <Loader type="bubble-ping" size={180} /> :
                        <>
                            <Typography className="font-display font-bold md:text-xl mb-4">
                                Send email in:
                            </Typography>
                            <div>
                                <div className="my-4">
                                    <Input
                                        style={{
                                            width: '80%',
                                        }}
                                        placeholder="Correo en español"
                                        value={clienteEmail}
                                        onChange={e => setClienteEmail(e.target.value)}
                                    />
                                    <Button className="ml-4" onClick={onEmailReview}>Enviar</Button>
                                </div>
                                <div className="my-4">
                                    <Input
                                        style={{
                                            width: '80%',
                                        }}
                                        placeholder="English email"
                                        value={clientEmail}
                                        onChange={e => setClientEmail(e.target.value)}
                                    />
                                    <Button className="ml-4" onClick={onEmailReview}>Send</Button>
                                </div>
                            </div>
                        </>
                    }
                </>
        },
    ]

    return (
        <>
            {contextHolder}
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