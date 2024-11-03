import { Alert, Button, Form, Input, Typography, message } from "antd";
import { useContext, useEffect, useState } from "react";
import Loader from "react-js-loader";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../apiService/userApi";
import { authContext } from "../../components/Context/authContext";

function NewEmail() {

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
    const { userid } = useParams();
    const [messageApi, contextHolder] = message.useMessage();

    const onNew = async (value) => {
        console.log('Received values of form: ', value.email);
        setLoading(true)
        const response = await updateUser(userid, { email: value.email })
        if (!response.msg) {
            setLoading(false)
            messageApi.open({
                type: 'success',
                content: 'Email changed successfully!'
            })
            form.resetFields();
            setLogOut()
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
                        <Button className="button" block type="primary" onClick={() => navigate('/login')}>
                            Go to Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewEmail;