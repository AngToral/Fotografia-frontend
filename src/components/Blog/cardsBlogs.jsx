import { Button, Card, CardBody, CardFooter, CardHeader, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import { message } from "antd";
import { deleteEntry } from "../../apiService/entryApi";
import { authContext } from "../Context/authContext";
import { useContext } from "react";


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
                        <Typography className="text-lg font-maquina">
                            {entry.text}
                        </Typography>
                        <Typography className="flex justify-end font-semibold font-revista text-lg mt-2">
                            {/* {moment(entry.photoDate).format().split("T")[0]} */}
                            {(entry.photoDate).split("T")[0]}
                        </Typography>
                    </CardBody>
                    {userId ?
                        <CardFooter className="pt-0 flex justify-around">
                            <Button className="bg-foto-400 text-foto-200" onClick={() => onEdit(entry._id)}>Edit</Button>
                            <Popover>
                                <PopoverHandler>
                                    <Button className="bg-foto-400 text-foto-200">Delete</Button>
                                </PopoverHandler>
                                <PopoverContent className="flex flex-col">
                                    Are you sure?
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