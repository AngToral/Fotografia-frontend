import { Alert, Button, Form, Input, Typography, message } from "antd";
import { useContext, useEffect, useState } from "react";
import Loader from "react-js-loader";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../apiService/userApi";
import { authContext } from "../../components/Context/authContext";

function NewPassword() {

    const { setLogOut } = useContext(authContext)

    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
        document.body.style.backgroundImage = "url('../../../../images/firma-verde.avif')";
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
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
            messageApi.open({
                type: 'success',
                content: 'Password changed successfully!'
            })
            form.resetFields();
            setLogOut();
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
                        <Form.Item label="New password" name="password" rules={[{ required: true }]}>
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
                        {change ? <Alert message="The new password do not match!" type="error" className="mb-4" /> : null}
                        <Button className="button" block type="primary" onClick={() => navigate('/login')}>
                            Go to Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewPassword;