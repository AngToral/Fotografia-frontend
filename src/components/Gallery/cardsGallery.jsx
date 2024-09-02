import { Button, Card, CardBody } from "@material-tailwind/react";
import { Image, Popconfirm, message } from "antd";
import './cardsGallery.scss'
import '../../pages/home/home.scss'
import { deletePhoto } from "../../apiService/photoApi";

const CardsGallery = ({ photo, refresh, visible, photoId }) => {
    //const [messageApi, contextHolder] = message.useMessage();

    const handleDelete = async (id) => {
        await deletePhoto(id)
        refresh(prev => !prev);
        message.success("Photo deleted!")
        // messageApi.open({
        //     type: 'success',
        //     content: 'Photo deleted!'
        // })
    }

    const editPhoto = (id) => {
        console.log("edito id: ", id)
        photoId((prev) => id)
        visible((prev) => !prev);
    }

    return (
        <>
            {/* {contextHolder} */}
            <Card className="max-w-[300px] h-full rounded-2xl m-6 bg-foto-200">
                <Image
                    className="rounded-t-2xl"
                    src={photo.imageGallery}
                />
                <CardBody className="flex flex-col">
                    <div className="flex justify-start">
                        <p className="tema">{(photo.theme1)}</p>
                        <p className="tema">{(photo.theme2) !== "undefined" ? photo.theme2 : "🩶"}</p>
                    </div>
                    <div className="flex justify-center gap-6 mt-4 place-content-end">
                        <Button onClick={() => editPhoto(photo._id)} className="link text-foto-800" variant="text">Edit</Button>
                        <Popconfirm
                            okType="dashed"
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(photo._id)}>
                            <Button className="link text-foto-800" variant="text">Delete</Button>
                        </Popconfirm>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default CardsGallery;