import { Alert, Button, Form, Input, Typography, message } from "antd";
import { useEffect, useState } from "react";
import Loader from "react-js-loader";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../apiService/userApi";

function ForgotPassword() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
    })

    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [change, setChange] = useState(false)
    const { userid } = useParams();
    const [messageApi, contextHolder] = message.useMessage();

    const onNew = async (value) => {
        console.log('Received values of form: ', value.password);
        setLoading(true)
        const response = await updateUser(userid, { password: value.password })
        if (!response.msg) {
            setLoading(false)
            navigate('/login')
            messageApi.open({
                type: 'success',
                content: 'Password changed successfully!'
            })
        }
    }

    return (
        <>
            {contextHolder}
            <div className="flex justify-center items-center h-screen">
                <div className="login">
                    <Typography className="text-4xl font-display mb-6 flex justify-center">Mariana Mendoza</Typography>
                    <Form
                        form={form}
                        name="dependencies"
                        autoComplete="off"
                        style={{ maxWidth: 600 }}
                        layout="vertical"
                        onFinish={onNew}
                    >
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="confirmation"
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return setChange(false),
                                                Promise.resolve()
                                        }
                                        return setChange(true);
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button className="button" block type="primary" htmlType="submit" disabled={(loading, change)}>
                                {loading ? <Loader type="rectangular-ping" size={180} /> : 'Set new'}
                            </Button>
                        </Form.Item>
                        {change ? <Alert message="The new password do not match!" type="error" /> : null}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;