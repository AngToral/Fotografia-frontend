import './cardsGallery.scss'
import { DatePicker, Form, Modal, Select, Typography, Upload, message } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import { addPhoto, getPhotoId, updatePhoto } from '../../apiService/photoApi';
import Loader from "react-js-loader";

dayjs().format()

const ModalPhoto = ({ visible, onCancel, refresh, photoId }) => {
    const [form] = Form.useForm();
    //const [messageApi, contextHolder] = message.useMessage();
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [initialValues, setInitialValues] = useState({})

    useEffect(() => {
        if (photoId) {
            getPhotoData(photoId)
        }
    }, [photoId]);

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

    const getPhotoData = async (photoId) => {
        console.log(photoId)
        const data = await getPhotoId(photoId)
        const formValues = {
            theme1: data.theme1,
            theme2: data.theme2 ? data.theme2 : null,
            photoDate: data.photoDate
        }
        console.log(formValues)
        setInitialValues(formValues)
        form.setFieldsValue(formValues)
    }

    const onFinish = async (values) => {
        try {
            const formData = new FormData();
            if (fileList[0]?.originFileObj) {
                formData.append("imageGallery", fileList[0].originFileObj);
            }
            formData.append("theme1", values.theme1);
            formData.append("theme2", values.theme2);
            formData.append("photoDate", values.photoDate);
            setLoading(true)
            if (photoId) {
                console.log("Edito el id: ", photoId, "formData", formData)
                await updatePhoto(photoId, formData)
                message.success("Photo updated correctly!")
                // messageApi.open({
                //     type: 'success',
                //     content: 'Photo updated correctly!'
                // })
            } else {
                console.log("creo foto con los values: ", values)
                await addPhoto(formData);
                message.success("Photo uploaded correctly!")
                // messageApi.open({
                //     type: 'success',
                //     content: 'Photo uploaded correctly!'
                // })
            }
            setLoading(false)
            refresh(prev => !prev)
            form.resetFields();
            onCancel();
        } catch (error) {
            message.error("Failed to upload photo")
            // messageApi.open({
            //     type: 'error',
            //     content: 'Failed to upload photo'
            // })
        }
    }

    const onChangeDate = (date, dateStrings) => {
        form.setFieldsValue({ photoDate: dateStrings })
    };

    const onChangeUpload = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const cancel = () => {
        onCancel();
        form.resetFields();
    }

    return (
        <>
            {/* {contextHolder} */}
            <Modal
                open={visible}
                title={
                    photoId ? <Typography className="m-6 text-foto-900 font-bold text-lg font-display">Editar foto</Typography>
                        : <Typography className="m-6 text-foto-900 font-bold text-lg font-display">Nueva foto de galería</Typography>
                }
                okType="primary"
                className="text-lg font-display"
                onCancel={cancel}
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
        </>
    );
}

export default ModalPhoto;