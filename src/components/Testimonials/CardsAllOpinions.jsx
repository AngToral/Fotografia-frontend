import { Card, CardBody } from "@material-tailwind/react";
import './cardsOpinions.scss'

function CardsAllOpinions({ opinion }) {

    return (
        <>
            <div className="flex flex-col justify-center content-center">
                <div className="card-all-opinions content-center">
                    <div className="flex justify-center absolute z-10 md:right-20 right-12 -top-6">
                        <img src="../../../images/washitape.png" className="h-12 w-36" />
                    </div>
                    <p className="flex justify-start ml-2 md:text-xl text-lg font-cursiva"><strong>{opinion.clientName}:</strong></p>
                    <p className="flex justify-center my-4 font-maquina">"{opinion.testimonial}"</p>
                    <p className="flex justify-end italic mr-6 text-sm">{opinion.shootDate.split("T")[0]}</p>
                </div>
                <div className="footer-all-opinions content-end px-5">
                    <hr className="my-4 border-foto-100" />
                    <p className="flex justify-center">🤍</p>
                </div>
            </div>
        </>
    );
}

export default CardsAllOpinions;