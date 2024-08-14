import { useEffect, useState } from "react";
import './home.scss'
import { Button, Divider, Flex, Typography, } from "antd";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
    })

    return (
        <>
            <div className="h-screen big-screen">
                <div className="flex justify-end">
                    <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">
                        Sobre mí
                    </Button>
                    <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">
                        Contacto
                    </Button>
                    <Menu>
                        <MenuHandler>
                            <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">Idioma</Button>
                        </MenuHandler>
                        <MenuList className="bg-foto-700 border-foto-100">
                            <MenuItem className="text-black" data-lenguage="es">🇪🇸 Español</MenuItem>
                            <MenuItem className="text-black" data-lenguage="en">🇬🇧 English</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="flex flex-col items-center">
                    <img className="imagen rounded-full h-[300px]" src="../../../images/perfil-cuadrado.png" alt="mariana-mendoza" />
                    <img className="firma absolute" src="../../../images/firma-verde.png" alt="mariana-mendoza" />
                    <h1 type="text" className="encabezado text-7xl text-foto-900 font-display">
                        Fotógrafa
                    </h1>
                    <p className="text-foto-900">__________________________________</p>
                    <div className="flex">
                        <Button type="text" className="text-lg text-foto-900">
                            Galería
                        </Button>
                        <Button type="text" className="text-lg text-foto-900">
                            Instagram
                        </Button>
                        <Button type="text" className="text-lg text-foto-900">
                            Portfolio
                        </Button>
                        <Button type="text" className="text-lg text-foto-900">
                            Blog
                        </Button>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-3xl font-bold text-foto-100">
                    Seguimos
                </h1>
            </div>
        </>
    );
}

export default Home;