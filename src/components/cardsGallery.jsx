import { Button, Card, CardBody } from "@material-tailwind/react";
import { Image } from "antd";
import './cardsGallery.scss'
import '../pages/home/home.scss'

function CardsGallery({ id, theme1, theme2, imageGallery }) {
    return (
        <Card className="max-w-[300px] h-full rounded-2xl m-6 bg-foto-200">
            <Image
                className="rounded-t-2xl"
                src={imageGallery}
            />
            <CardBody className="flex flex-col">
                <div className="flex justify-start">
                    <p className="tema">{theme1}</p>
                    <p className="tema">{theme2}</p>
                </div>
                <div className="flex justify-center gap-6 mt-4 place-content-end">
                    <Button className="link text-foto-800" variant="text">Editar</Button>
                    <Button className="link text-foto-800" variant="text">Eliminar</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default CardsGallery;