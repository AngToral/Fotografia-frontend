import { Card, CardBody } from "@material-tailwind/react";

function CardsOpinion() {


    return (
        <>
            <Card color="transparent" shadow={false} className="max-w-[300px] m-6">
                <img src="../../../images/opiniones.png" alt="cabecera-texto-flor" />
                <CardBody className="text-foto-200 font-revista">
                    <p className="flex justify-start">Nombre</p>
                    <p className="flex justify-center my-4">Opinión</p>
                    <p className="flex justify-end">Fecha</p>
                </CardBody>
                <img src="../../../images/opiniones.png" className="rotate-180" alt="fondo-texto-flor" />
            </Card>
        </>
    );
}

export default CardsOpinion;