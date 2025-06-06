import { Button, Card, CardBody, CardFooter, CardHeader, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import { message } from "antd";
import { deleteEntry } from "../../apiService/entryApi";
import { authContext } from "../Context/authContext";
import { useContext } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const CardsBlogs = ({ entry, refresh, visible, entryId }) => {

    const { userId } = useContext(authContext)

    const onDelete = async (id) => {
        console.log("elimino id: ", id)
        await deleteEntry(id)
        refresh(prev => !prev);
        message.success("Photo deleted!")
    }

    const onEdit = async (id) => {
        console.log("edito id: ", id)
        entryId((prev) => id)
        visible(prev => !prev);
    }

    return (
        <>
            <div className="p-3">
                <Card className="mt-6 max-w-[500px]">
                    <CardHeader color="blue-gray" className="relative flex justify-center">
                        <img
                            src={entry.imageBlog}
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <p className="md:text-lg">
                            {entry.text}
                        </p>
                        <p className="flex justify-end md:text-lg mt-2">
                            {(entry.photoDate).split("T")[0]}
                        </p>
                    </CardBody>
                    {userId ?
                        <CardFooter className="pt-0 flex justify-around">
                            <Button className="bg-foto-400 text-foto-200 font-normal" onClick={() => onEdit(entry._id)}>Edit</Button>
                            <Popover>
                                <PopoverHandler>
                                    <Button className="bg-foto-400 text-foto-200 font-normal">Delete</Button>
                                </PopoverHandler>
                                <PopoverContent className="flex flex-col">
                                    <div className="flex">
                                        <ExclamationCircleOutlined className="mr-1 bg-red" />
                                        Are you sure?
                                    </div>
                                    <Button className="bg-foto-200 text-foto-400 mt-3" onClick={() => onDelete(entry._id)}>Yes!</Button>
                                </PopoverContent>
                            </Popover>
                        </CardFooter>
                        : null}
                </Card>
            </div>
        </>
    );
}

export default CardsBlogs;

//.split("T")[0]