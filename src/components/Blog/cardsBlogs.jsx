import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";


const CardsBlogs = ({ entry, refresh }) => {


    return (
        <>
            <div className="p-3">
                <Card className="mt-6 max-w-[500px]">
                    <CardHeader color="blue-gray" className="relative max-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography className="text-lg font-maquina">
                            {entry.text}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography className="flex justify-end font-semibold font-revista text-lg">
                            {entry.photoDate.split("T")[0]}
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default CardsBlogs;