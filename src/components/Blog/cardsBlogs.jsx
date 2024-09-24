import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";


const CardsBlogs = ({ entry, refresh }) => {

    const onDelete = async () => {
        console.log("elimino id: ", entry._id)
    }

    const onEdit = async () => {
        console.log("edito id: ", entry._id)
    }

    return (
        <>
            <div className="p-3">
                <Card className="mt-6 max-w-[500px]">
                    <CardHeader color="blue-gray" className="relative">
                        <img
                            src={entry.photo}
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography className="text-lg font-maquina">
                            {entry.text}
                        </Typography>
                        <Typography className="flex justify-end font-semibold font-revista text-lg mt-2">
                            {entry.photoDate.split("T")[0]}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-around">
                        <Button className="bg-foto-400 text-foto-200" onClick={onEdit}>Editar</Button>
                        <Button className="bg-foto-400 text-foto-200" onClick={onDelete}>Eliminar</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default CardsBlogs;