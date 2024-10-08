import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Flex, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from "@material-tailwind/react";
import './login.scss'
import '../../color.scss'
import { forgotPasswordEmail, login } from "../../apiService/userApi";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";

function Login() {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [email, setEmail] = useState('')
    const [emailForgotten, setEmailForgotten] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [forgot, setForgot] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../../public/images/papernews.jpg')"
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundPosition = "center center"
    }, [])

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        if (values.username === "" || values.password === "") { }
        setLoading(true)
        const response = await login(email, password)
        console.log(response)
        setLoading(false)
        if (!response.msg) {
            localStorage.setItem('access_token', response)
            navigate('/') //logeado
        }
        if (response.msg === "This email is not registered") {
            messageApi.open({
                type: 'warning',
                content: 'This email is not registered'
            })
        }
        if (response.msg === "Email is no longer active") {
            messageApi.open({
                type: 'warning',
                content: 'Email is no longer active'
            })
        }
        if (response.msg === "Wrong password") {
            messageApi.open({
                type: 'error',
                content: 'Wrong password'
            })
        }
    };

    const onForgot = async (email) => {
        console.log('Received emails of form: ', email);
        if (email === "") { }
        setLoading(true)
        const response = await forgotPasswordEmail(email)
        setLoading(false)
        if (!response.msg) {
            setForgot(false)
            navigate('/login') //correo enviado
            messageApi.open({
                type: 'success',
                content: 'Email sent!'
            })
        }
        if (response.msg === "This email is not registered") {
            messageApi.open({
                type: 'warning',
                content: 'This email is not registered'
            })
        }
    }

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            {contextHolder}
            <div className="h-screen">
                <div className="flex justify-between flex-wrap mb-10">
                    <div className="flex justify-start mx-6">
                        <button variant="text" className="link2 font-display text-foto-200 m-4 md:text-xl font-bold" onClick={handleHome}>
                            Home
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="login">
                        <img className="flex justify-center w-64" src="../../../public/images/firma-rosa.png" />
                        {forgot ?
                            <Form
                                layout="vertical"
                                form={form}
                                name="passwordForgotten"
                                initialValues={{
                                    remember: true,
                                }}
                                style={{
                                    maxWidth: 360,
                                }}
                                onFinish={onForgot}
                            >
                                <Form.Item
                                    name="email"
                                    label="Indique su correo electrónico:"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<UserOutlined />}
                                        placeholder="Email"
                                        value={emailForgotten}
                                        onChange={e => setEmailForgotten(e.currentTarget.value)} />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="button" block type="primary" htmlType="submit" disabled={loading}>
                                        {loading ? <Loader type="rectangular-ping" size={180} /> : 'Send email'}
                                    </Button>
                                </Form.Item>
                            </Form>
                            :
                            <div>
                                <Typography className="text-2xl mb-6 flex justify-center font-revista">Welcome back!</Typography>
                                <Form
                                    form={form}
                                    name="login"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    style={{
                                        maxWidth: 360,
                                    }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your email!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={<UserOutlined />}
                                            placeholder="Email"
                                            value={email}
                                            onChange={e => setEmail(e.currentTarget.value)} />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password
                                            prefix={<LockOutlined />}
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={e => setPassword(e.currentTarget.value)} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Flex justify="space-between" align="center">
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox className="font-revista check">Remember me</Checkbox>
                                            </Form.Item>
                                            <a className="font-revista forgot" onClick={e => setForgot(true)}>Forgot password</a>
                                        </Flex>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button className="button font-revista" block type="primary" htmlType="submit" disabled={loading}>
                                            {loading ? <Loader type="rectangular-ping" size={180} /> : 'Login'}
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>}
                    </div>
                </div >
            </div>
        </>
    );
}

export default Login;