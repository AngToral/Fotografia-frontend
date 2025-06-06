import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Button, DatePicker, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import Loader from "react-js-loader";
import { addOpinion } from "../../apiService/testimonialsApi";
import { useNavigate } from "react-router-dom";

function NewTestimonial() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/paperOpiniones.avif')"
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundPosition = "center center"
    })

    const [loading, setLoading] = useState(false)
    const [okOpinion, setOkOpinion] = useState(false)
    const [form] = Form.useForm();
    const [t, i18n] = useTranslation("home")
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values)
        setLoading(true)
        const response = await addOpinion(values)
        if (!response.msg) {
            messageApi.open({
                type: 'success',
                content: `${t("testimonials.created")}`
            })
            form.resetFields();
            setOkOpinion(true)
        }
        if (response.msg === "You missed some parameter") {
            messageApi.open({
                type: 'warning',
                content: 'You missed some parameter'
            })
        }
        setLoading(false)
    }

    const onChangeDate = (date, dateStrings) => {
        form.setFieldsValue({ shootDate: dateStrings })
    };

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            {contextHolder}
            <div className="flex justify-between">
                <a className="flex m-4 text-xl font-bold text-foto-700 link2" onClick={handleHome}>
                    Home
                </a>
                <Menu>
                    <MenuHandler>
                        <a variant="text" className="flex m-4 text-xl font-bold text-foto-700 link2">
                            {t("header.lenguage")}<FaAngleDown />
                        </a>
                    </MenuHandler>
                    <MenuList className="bg-foto-700 border-foto-100">
                        <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-black" data-lenguage="es">🇪🇸 Español</MenuItem>
                        <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-black" data-lenguage="en">🇬🇧 English</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            {okOpinion ?
                <>
                    <div className="flex justify-center items-center flex-col h-screen">
                        <p className="text-foto-700 text-5xl">{t("testimonials.created")}</p>
                        <img className="h-[500px]" src="/images/thankyou.avif" />
                    </div>
                </> :
                <>
                    <div className="flex justify-center items-center">
                        <img className="w-72" src="/images/firma-rosa.avif" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="login w-[400px] mx-6 mb-6">
                            <div className="flex justify-center">
                                <p className="md:text-4xl text-3xl mb-6 text-foto-300">{t("testimonials.testimonial")}</p>
                            </div>
                            <Form
                                form={form}
                                name="testimonios"
                                layout="vertical"
                                labelCol={{
                                    span: 30,
                                }}
                                wrapperCol={{
                                    span: 30,
                                }}
                                onFinish={(values) => onFinish(values)}
                            >
                                <Form.Item
                                    label={t("contact.name")}
                                    name="clientName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Mariana" />
                                </Form.Item>
                                <Form.Item
                                    label={t("testimonials.email")}
                                    name="clientEmail"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="example@gmail.com" />
                                </Form.Item>
                                <Form.Item
                                    label={t("testimonials.date")}
                                    name="shootDate"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input the photoshoot date!',
                                        },
                                    ]}
                                    getValueProps={(value) => ({ value: value ? dayjs(value) : "", })}
                                >
                                    <DatePicker onChange={onChangeDate} />
                                </Form.Item>
                                <Form.Item
                                    label={t("testimonials.country")}
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your country!',
                                        },
                                    ]}
                                >
                                    <Input className="" placeholder="NL" showCount maxLength={2} />
                                </Form.Item>
                                <Form.Item
                                    label={t("testimonials.opinion")}
                                    name="testimonial"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your testimonial!',
                                        },
                                    ]}
                                >
                                    <TextArea className="" placeholder={t("testimonials.textarea")} rows={4} showCount maxLength={520} />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="button" block type="primary" htmlType="submit" disabled={loading}>
                                        {loading ? <Loader type="rectangular-ping" size={180} /> : `${t("contact.send")}`}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div >
                </>
            }
        </>
    );
}

export default NewTestimonial;