import { PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, Modal, Typography, Upload, message } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Loader from "react-js-loader";
import { addEntry, getEntryId, updateEntry } from "../../apiService/entryApi";

dayjs().format()

function ModalEntry({ visible, onCancel, refresh, entryId }) {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [initialValues, setInitialValues] = useState({})

    const { TextArea } = Input;

    useEffect(() => {
        if (entryId) {
            getEntryData(entryId)
        }
    }, [entryId]);

    const getEntryData = async (entryId) => {
        console.log(entryId)
        const data = await getEntryId(entryId)
        const formValues = {
            text: data.text,
            photoDate: data.photoDate
        }
        console.log(data)
        setInitialValues(formValues)
        form.setFieldsValue(formValues)
    }

    const onFinish = async (values) => {
        console.log(values)
        try {
            const formData = new FormData();
            if (fileList[0]?.originFileObj) {
                formData.append("imageBlog", fileList[0].originFileObj);
            }
            formData.append("text", values.text);
            formData.append("photoDate", values.photoDate);
            setLoading(true)
            if (entryId) {
                await updateEntry(entryId, formData)
                message.success("Entry updated correctly!")
            } else {
                await addEntry(formData);
                message.success("Entry uploaded correctly!")
            }
            setLoading(false)
            refresh(prev => !prev)
            form.resetFields();
            onCancel();
        } catch (error) {
            message.error("Failed to upload entry")
        }
    }

    const onChangeUpload = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onChangeDate = (date, dateStrings) => {
        form.setFieldsValue({ photo: dateStrings })
    };

    const cancel = () => {
        onCancel();
        form.resetFields();
    }

    return (
        <>
            <Modal
                open={visible}
                title={
                    entryId ? <Typography className="m-6 text-foto-900 font-bold text-lg font-display">Edit entry</Typography> :
                        <Typography className="m-6 text-foto-900 font-bold text-lg font-display">New blog entry</Typography>
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
                        name="entryForm"
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
                            label="Photo"
                            name="imageBlog"
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
                            label="Your writting"
                            name="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please write something!',
                                },
                            ]}
                        >
                            <TextArea rows={10} placeholder="..." />
                        </Form.Item>
                    </>
                }
            </Modal >
        </>
    );
}

export default ModalEntry;