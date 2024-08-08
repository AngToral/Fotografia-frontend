import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Flex, Spin, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from "@material-tailwind/react";
import './login.scss'
import '../../color.scss'
import { login } from "../../apiService/userApi";
import { useNavigate } from "react-router-dom";

function Login() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../../public/images/papernews.png')"
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundPosition = "center center"
    })

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [email, setEmail] = useState('')
    const [emailForgotten, setEmailForgotten] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [forgot, setForgot] = useState(false)

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        if (values.username === "" || values.password === "") { }
        setLoading(true)
        const response = await login(email, password)
        setLoading(false)
        if (!response.msg) {
            navigate('/')
        }
        if (response.msg === "This email is not registered") {
            message.warning("This email is not registered")
        }
        if (response.msg === "Email is no longer active") {
            message.warning("Email is no longer active")
        }
        if (response.msg === "Wrong password") {
            message.warning("Wrong password")
        }
    };

    const onForgot = (value) => {
        console.log('Received values of form: ', value);
        setLoading(true)
        //enviamos correo
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="login">
                    <Typography className="text-4xl font-display mb-6 flex justify-center">Mariana Mendoza</Typography>
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
                                    {loading ? <Spin /> : 'Send email'}
                                </Button>
                            </Form.Item>
                        </Form>
                        :
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
                                        <Checkbox className="check">Remember me</Checkbox>
                                    </Form.Item>
                                    <a onClick={e => setForgot(!forgot)}>Forgot password</a>
                                </Flex>
                            </Form.Item>

                            <Form.Item>
                                <Button className="button" block type="primary" htmlType="submit" disabled={loading}>
                                    {loading ? <Spin /> : 'Login'}
                                </Button>
                            </Form.Item>
                        </Form>}
                </div>
            </div >
        </>
    );
}

export default Login;