import { PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Modal, Select, Typography, Upload } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import Loader from "react-js-loader";

function ModalEntry({ visible, onCancel, refresh }) {

    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);

    const [form] = Form.useForm();

    return (
        <>
            <Modal
                open={visible}
                title={
                    // photoId ? <Typography className="m-6 text-foto-900 font-bold text-lg font-display">Editar foto</Typography> :
                    <Typography className="m-6 text-foto-900 font-bold text-lg font-display">Nueva foto de galería</Typography>
                }
                okType="primary"
                className="text-lg font-display"
                //onCancel={cancel}
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
                            <Select placeholder="Select..." options="{themes}" />
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
                            // onChange={onChangeDate}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Photo"
                            name="imageGallery"
                        >
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                //onChange={onChangeUpload}
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

export default ModalEntry;