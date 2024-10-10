import { Alert, Button, Form, Input, Typography, message } from "antd";
import { useEffect, useState } from "react";
import Loader from "react-js-loader";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../apiService/userApi";

function NewEmail() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
    })

    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const { userid } = useParams();
    const [messageApi, contextHolder] = message.useMessage();

    const onNew = async (value) => {
        console.log('Received values of form: ', value.email);
        setLoading(true)
        const response = await updateUser(userid, { email: value.email })
        if (!response.msg) {
            setLoading(false)
            navigate('/login')
            messageApi.open({
                type: 'success',
                content: 'Email changed successfully!'
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
                        <Form.Item label="New email" name="email" rules={[{ required: true }]}>
                            <Input placeholder="example@email.com" />
                        </Form.Item>
                        <Form.Item>
                            <Button className="button" block type="primary" htmlType="submit" disabled={(loading)}>
                                {loading ? <Loader type="rectangular-ping" size={180} /> : 'Set new'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewEmail;