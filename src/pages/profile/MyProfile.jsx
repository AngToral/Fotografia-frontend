import { Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Button, Card, Collapse, Input, message } from "antd";
import Loader from "react-js-loader";
import { sendReseñaEmail, sendReviewEmail } from "../../apiService/testimonialsApi";
import { authContext } from "../../components/Context/authContext";
import { getUser, sendChangeEmail, sendChangePassword } from "../../apiService/userApi";

function MyProfile() {
    const [clientEmail, setClientEmail] = useState("")
    const [clienteEmail, setClienteEmail] = useState("")
    const [clientName, setClientName] = useState("")
    const [clienteNombre, setClienteNombre] = useState("")
    const [userLogged, setUserLogged] = useState("")
    const [userName, setUserName] = useState("")
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    const { setLogOut, userId } = useContext(authContext)

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.0), rgba(240, 255, 255, 0.10)), url('../../../../images/fondo-about-me.avif')";
        document.body.style.backgroundSize = "cover"
        getUserLogged();
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

    const getUserLogged = async () => {
        if (userId) {
            const user = await getUser(userId);
            setUserLogged(user?.email)
            setUserName(user?.name)
        }
    };

    const changePassword = async () => {
        setLoading(true)
        if (userId) {
            await sendChangePassword(userLogged)
            messageApi.open({
                type: 'success',
                content: "Email sent!"
            })
        }
        setLoading(false);
    };

    const changeEmail = async () => {
        setLoading(true)
        if (userId) {
            await sendChangeEmail(userLogged)
            messageApi.open({
                type: 'success',
                content: "Email sent!"
            })
        }
        setLoading(false);
    };

    const items = [
        {
            key: '1',
            label: <Typography className="font-display font-bold md:text-2xl">
                Change email or password
            </Typography>,
            children:
                <>
                    {loading ? <Loader type="bubble-ping" size={180} /> :
                        <>
                            <div className="my-4">
                                <Button className="" onClick={changeEmail}>Change email</Button>
                            </div>
                            <div className="my-4">
                                <Button className="" onClick={changePassword}>Change password</Button>
                            </div>
                        </>
                    }
                </>
        },
        {
            key: '2',
            label: <Typography className="font-display font-bold md:text-2xl">
                Send new review request email
            </Typography>,
            children:
                <>
                    {loading ? <Loader type="bubble-ping" size={180} /> :
                        <>
                            <Typography className="font-display font-bold md:text-xl mb-4">
                                Send email to:
                            </Typography>
                            <div>
                                <div className="flex flex-col md:flex-row my-4 mb-6">
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder="Nombre del cliente"
                                        value={clienteNombre}
                                        onChange={e => setClienteNombre(e.target.value)}
                                        className="md:mr-2 mb-2"
                                    />
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder="Correo en español"
                                        value={clienteEmail}
                                        onChange={e => setClienteEmail(e.target.value)}
                                        className="md:mr-2 mb-2"
                                    />
                                    <Button className="md:w-32" onClick={onEmailReview}>Enviar</Button>
                                </div>
                                <div className="flex flex-col md:flex-row my-4">
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder="Client name"
                                        value={clientName}
                                        onChange={e => setClientName(e.target.value)}
                                        className="md:mr-2 mb-2"
                                    />
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder="English email"
                                        value={clientEmail}
                                        onChange={e => setClientEmail(e.target.value)}
                                        className="md:mr-2 mb-2"
                                    />
                                    <Button className="md:w-32 justify-center items-center flex" onClick={onEmailReview}>Send</Button>
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
                            Hello, {userName} !!
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