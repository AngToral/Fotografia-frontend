import { useNavigate, useParams } from "react-router-dom";
import { deleteOpinion, getOpinionId } from "../../apiService/testimonialsApi";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import { message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function DeleteTestimonial() {
    const [loading, setLoading] = useState(false)
    const [okDeleted, setOkDeleted] = useState(false)
    const [newOpinion, setNewOpinion] = useState("")
    const { opinionid } = useParams();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8";
        getTestimonialId();
    }, []);

    const getTestimonialId = async () => {
        setLoading(true)
        const opinion = await getOpinionId(opinionid)
        setNewOpinion(opinion)
        setLoading(false)
    }
    function handleHome() {
        navigate("/")
    }

    const onDelete = async () => {
        setLoading(true)
        const response = await deleteOpinion(opinionid)
        if (!response.msg) {
            messageApi.open({
                type: 'success',
                content: 'Opinion deleted!'
            })
            setOkDeleted(true)
        }
        if (response.msg === "Opinion not found") {
            messageApi.open({
                type: 'warning',
                content: 'Opinion not found'
            })
        }
        setLoading(false)
    }

    return (
        <>
            {contextHolder}
            <div className="flex justify-start">
                <a className="font-display flex m-4 text-xl font-bold text-foto-100 link" onClick={handleHome}>
                    Home
                </a>
            </div>
            <div className="flex justify-center flex-col items-center h-screen">
                {okDeleted ?
                    <>
                        <div className="flex flex-col">
                            <p className="text-foto-900 text-5xl m-6">Deleted!</p>
                            <img className="h-[250px]" src="../../../public/images/deleted.avif" />
                        </div>
                    </> :
                    <>
                        <div>
                            <p className="text-foto-800 font-display md:text-5xl text-xl" >Do you want to delete this opinion?</p>
                        </div>
                        <Card color="transparent" shadow={false} className="max-w-[500px] m-6">
                            <img src="../../../images/opiniones.avif" alt="cabecera-texto-flor" />
                            <CardBody className="text-foto-800 font-revista">
                                <div className="flex flex-col md:flex-row">
                                    <p className="flex justify-start ml-6"><strong>Creation date of the opinion:&nbsp;&nbsp; </strong></p>
                                    <p className="flex justify-start ml-6">{new Date(newOpinion.createdAt).toDateString()}</p>
                                </div>
                                <p className="flex justify-start ml-6"><strong>{newOpinion.clientEmail}</strong></p>
                                <p className="flex justify-start ml-6"><strong>{newOpinion.clientName}:</strong></p>
                                <p className="flex justify-center my-4">"{newOpinion.testimonial}"</p>
                                <p className="flex justify-end italic mr-6">{new Date(newOpinion.shootDate).toDateString()}</p>
                            </CardBody>
                            <CardFooter className="p-0 flex justify-center">
                                <Popover>
                                    <PopoverHandler>
                                        <Button className="bg-nani-200 text-foto-200">Delete</Button>
                                    </PopoverHandler>
                                    <PopoverContent className="flex flex-col">
                                        <div className="flex">
                                            <ExclamationCircleOutlined className="mr-1 bg-red" />
                                            Are you sure?
                                        </div>
                                        <Button className="bg-nani-200 text-foto-200 mt-4" onClick={onDelete}>Yes!</Button>
                                    </PopoverContent>
                                </Popover>
                            </CardFooter>
                            <img src="../../../images/opiniones.avif" className="rotate-180" alt="fondo-texto-flor" />
                        </Card>
                    </>
                }
            </div >
        </>
    );
}

export default DeleteTestimonial;