import './cardsGallery.scss'
import { DatePicker, Form, Modal, Select, Typography, Upload, message } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import { addPhoto } from '../../apiService/photoApi';
import Loader from "react-js-loader";

dayjs().format()

const ModalPhoto = ({ visible, onCancel, refresh }) => {
    const [form] = Form.useForm();
    const [messageInfo, setMessageInfo] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (messageInfo) {
            if (messageInfo.type === 'success') {
                message.success(messageInfo.content);
            } else if (messageInfo.type === 'error') {
                message.error(messageInfo.content);
            }
            setMessageInfo(null);
        }
    }, [messageInfo]);

    const themes = [
        {
            label: "Deportes",
            value: "Deportes"
        },
        {
            label: "Retrato",
            value: "Retrato"
        },
        {
            label: "Fotoperiodismo",
            value: "Fotoperiodismo"
        },
        {
            label: "Escenario",
            value: "Escenario"
        },
        {
            label: "Evento",
            value: "Evento"
        },
        {
            label: "Paisaje",
            value: "Paisaje"
        },
        {
            label: "Mujer",
            value: "Mujer"
        },
        {
            label: "Hombre",
            value: "Hombre"
        },
        {
            label: "Animal",
            value: "Animal"
        },
        {
            label: "Pareja",
            value: "Pareja"
        },
    ]

    const onFinish = async (values) => {
        try {
            console.log("values: ", values)
            const formData = new FormData();
            formData.append("imageGallery", fileList[0].originFileObj);
            formData.append("theme1", values.theme1);
            formData.append("theme2", values.theme2);
            formData.append("photoDate", values.photoDate);
            setLoading(true)
            const response = await addPhoto(formData);
            setLoading(false)
            setMessageInfo({ type: 'success', content: 'Photo uploaded correctly!' });
            refresh(prev => !prev)
            form.resetFields();
            onCancel();
        } catch (error) {
            setMessageInfo({ type: 'error', content: error.message || 'Failed to upload photo' });
        }
    }

    const onChangeDate = (date, dateStrings) => {
        form.setFieldsValue({ photoDate: dateStrings })
    };

    const onChangeUpload = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <Modal
            open={visible}
            title={<Typography className="m-6 text-foto-900 font-bold text-lg font-display">Nueva foto de galería</Typography>}
            okType="primary"
            className="text-lg font-display"
            onCancel={onCancel}
            okButtonProps={{
                autoFocus: true,
                htmlType: "submit",
            }}
            modalRender={(dom) => (
                <Form
                    layout="horizontal"
                    form={form}
                    name="photoForm"
                    initialValues={{
                        modifier: "public",
                    }}
                    onFinish={(values) => onFinish(values)}
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    {dom}
                </Form>
            )}
        >
            {loading ? <Loader type="bubble-ping" bgColor="#907a5f" size={180} /> :
                <>
                    <Form.Item
                        label="Theme 1"
                        name="theme1"
                        rules={[
                            {
                                required: true,
                                message: 'Please select one theme!',
                            },
                        ]}
                    >
                        <Select placeholder="Select..." options={themes} />
                    </Form.Item>
                    <Form.Item label="Theme 2" name="theme2">
                        <Select placeholder="Select..." options={themes} />
                    </Form.Item>
                    <Form.Item
                        label="Picture date"
                        name="photoDate"
                        getValueProps={(value) => ({ value: value ? dayjs(value) : "", })}
                        rules={[
                            {
                                required: true,
                                message: 'Please select a date!',
                            },
                        ]}
                    >
                        <DatePicker
                            onChange={onChangeDate}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Photo"
                        name="imageGallery"
                        rules={[
                            {
                                required: true,
                                message: 'Please select one photo!',
                            },
                        ]}
                    >
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeUpload}
                            beforeUpload={() => false} >
                            <button
                                style={{
                                    border: 0,
                                    background: 'none',
                                }}
                                type="button"
                            >
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </button>
                        </Upload>
                    </Form.Item>
                </>
            }
        </Modal >
    );
}

export default ModalPhoto;