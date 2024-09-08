import { Card, CardBody } from "@material-tailwind/react";

function CardsOpinion({ opinion }) {


    return (
        <>
            <Card color="transparent" shadow={false} className="max-w-[400px] m-6">
                <img src="../../../images/opiniones.png" alt="cabecera-texto-flor" />
                <CardBody className="text-foto-200 font-revista">
                    <p className="flex justify-start ml-6"><strong>{opinion.clientName}:</strong></p>
                    <p className="flex justify-center my-4">"{opinion.testimonial}"</p>
                    <p className="flex justify-end italic mr-6">{opinion.shootDate.split("T")[0]}</p>
                </CardBody>
                <img src="../../../images/opiniones.png" className="rotate-180" alt="fondo-texto-flor" />
            </Card>
        </>
    );
}

export default CardsOpinion;