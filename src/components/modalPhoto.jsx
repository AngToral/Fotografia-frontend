import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import './cardsGallery.scss'
import { DatePicker, Form, Modal, Select, Typography, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function ModalPhoto({ visible, onCancel, refresh }) {
    const [form] = Form.useForm();


    return (
        <Modal open={visible} okType="primary">
            <Typography className="m-6 font-bold text-lg font-display">Nueva foto de galería</Typography>
            <Form
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Theme 1" name="theme1">
                    <Select>
                        <Select.Option value="hola">Hola</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Theme 2" name="theme2">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Picture date" name="photoDate">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Photo" valuePropName="fileList" >
                    <Upload action="/upload.do" listType="picture-card">
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
            </Form>
        </Modal>
    );
}

export default ModalPhoto;