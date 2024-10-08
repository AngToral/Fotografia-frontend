import { Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Button, Card, Collapse, Input, message } from "antd";
import Loader from "react-js-loader";
import { sendReseñaEmail, sendReviewEmail } from "../../apiService/testimonialsApi";
import { authContext } from "../../components/Context/authContext";

function MyProfile() {
    const [clientEmail, setClientEmail] = useState("")
    const [clienteEmail, setClienteEmail] = useState("")
    const [clientName, setClientName] = useState("")
    const [clienteNombre, setClienteNombre] = useState("")
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    const { setLogOut } = useContext(authContext)

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.0), rgba(240, 255, 255, 0.10)), url('../../../../images/fondo-about-me.png')";
    }, []);

    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    const onEmailReview = async () => {
        if ((clientEmail === "" || clientName === "") && (clienteEmail === "" || clienteNombre === "")) {
            messageApi.open({
                type: 'warning',
                content: "No email or name"
            })
        } else {
            setLoading(true)

            if (clientEmail !== "" && clientName !== "") {
                console.log(clientEmail, clientName)
                await sendReviewEmail({ clientEmail, clientName })
            }
            if (clienteEmail !== "" && clienteNombre !== "") {
                console.log(clienteEmail, clienteNombre)
                await sendReseñaEmail({ clienteEmail, clienteNombre })
            }

            setLoading(false)
            messageApi.open({
                type: 'success',
                content: "Email sent!"
            })
            setClienteEmail("")
            setClienteNombre("")
            setClientEmail("")
            setClientName("")
        }
    }

    const logout = () => {
        setLogOut()
        navigate("/login")
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
                                            width: '40%',
                                        }}
                                        placeholder="Nombre del cliente"
                                        value={clienteNombre}
                                        onChange={e => setClienteNombre(e.target.value)}
                                        className="mr-2"
                                    />
                                    <Input
                                        style={{
                                            width: '40%',
                                        }}
                                        placeholder="Correo en español"
                                        value={clienteEmail}
                                        onChange={e => setClienteEmail(e.target.value)}
                                    />
                                    <Button className="ml-3" onClick={onEmailReview}>Enviar</Button>
                                </div>
                                <div className="my-4">
                                    <Input
                                        style={{
                                            width: '40%',
                                        }}
                                        placeholder="Client name"
                                        value={clientName}
                                        onChange={e => setClientName(e.target.value)}
                                        className="mr-2"
                                    />
                                    <Input
                                        style={{
                                            width: '40%',
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
                        <button variant="text" className="flex items-center link2 font-display text-foto-200 m-4 md:text-xl font-bold" onClick={logout}>
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