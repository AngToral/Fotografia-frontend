import { useEffect, useState } from "react";
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from "@material-tailwind/react";
import '../login/login.scss'
import '../../color.scss'
import { addUser } from "../../apiService/userApi";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";

function Register() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
    })

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        if (values.email === "" || values.password === "") { }
        setLoading(true)
        const response = await addUser(values)
        setLoading(false)
        if (!response.msg) {
            navigate('/login') //creado
            message.success(`Account with ${email} created!`)
        }
        if (response.msg === "You missed some parameter") {
            message.warning("You missed some parameter")
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="login">
                    <Typography className="text-4xl font-firma mb-4 flex justify-center">Mariana Mendoza</Typography>
                    <Typography className="text-l mb-6 flex justify-center">Signup now and get full access to our app!</Typography>
                    <Form
                        form={form}
                        name="register"
                        initialValues={{
                            remember: true,
                        }}
                        style={{
                            maxWidth: 360,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.currentTarget.value)} />
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastname!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Lastname"
                                value={lastname}
                                onChange={e => setLastname(e.currentTarget.value)} />
                        </Form.Item>
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
                                    message: 'Please input a password!',
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
                            <Button className="button" block type="primary" htmlType="submit" disabled={loading}>
                                {loading ? <Loader type="rectangular-ping" size={180} /> : 'Submit'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        </>
    );
}

export default Register;