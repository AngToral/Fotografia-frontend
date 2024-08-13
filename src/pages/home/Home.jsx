import { useEffect, useState } from "react";
import './home.scss'
import { Col, Divider, Flex, Row } from "antd";

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f1dede"
    })

    const flags = [
        {
            flag: "🇺🇸",
            name: "English",
        },
        {
            flag: "🇪🇸",
            name: "Spanish",
        },
    ];

    return (
        <>
            <div className="inicio h-screen">
                <Flex justify="space-between">
                    <Flex>
                        <div className="m-4 text-xl font-bold text-foto-100">
                            <div>Sobre mí</div>
                        </div>
                        <div className="m-4 text-xl font-bold text-foto-100">
                            <div>Contacto</div>
                        </div>
                    </Flex>
                    <div className="m-4 text-xl font-bold text-foto-100">
                        <div>Idiomas</div>
                    </div>
                </Flex>
                <Flex vertical align="center" justify="center" className="h-full">
                    <div>
                        <h1 className="text-3xl font-bold text-foto-100">Firma centro abajo</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-foto-100">Foto centro debajo</h1>
                    </div>
                </Flex>
            </div>
            <div className="inicio flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold text-foto-100">
                    Seguimos
                </h1>
            </div>
        </>
    );
}

export default Home;