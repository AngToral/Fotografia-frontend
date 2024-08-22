import './cardsGallery.scss'
import { DatePicker, Form, Modal, Select, Typography, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import dayjs from "dayjs";

dayjs().format()

const ModalPhoto = ({ visible, onCancel, refresh }) => {
    const [form] = Form.useForm();

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
        console.log("values: ", values)
    }

    const onChangeDate = (date, dateStrings) => {
        form.setFieldsValue({ photoDate: dateStrings })
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
            <Form.Item label="Theme 1" name="theme1">
                <Select placeholder="Seleccionar..." options={themes} />
            </Form.Item>
            <Form.Item label="Theme 2" name="theme2">
                <Select placeholder="Seleccionar..." options={themes} />
            </Form.Item>
            <Form.Item label="Picture date" name="photoDate" getValueProps={(value) => ({ value: value ? dayjs(value) : "", })}>
                <DatePicker
                    onChange={onChangeDate}
                />
            </Form.Item>
            <Form.Item label="Photo" name="imageGallery" >
                <Upload listType="picture-card">
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
        </Modal >
    );
}

export default ModalPhoto;