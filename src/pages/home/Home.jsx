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
        document.body.style.backgroundColor = "#f1dede"
    })

    return (
        <>
            <div className="h-screen bg-foto-">
                <Flex justify="space-between">
                    <Flex>
                        <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-800">
                            Sobre mí
                        </Button>
                        <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-800">
                            Contacto
                        </Button>
                    </Flex>
                    <Menu>
                        <MenuHandler>
                            <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-800">Idioma</Button>
                        </MenuHandler>
                        <MenuList className="bg-foto-700 border-foto-100">
                            <MenuItem className="text-black">🇪🇸 Español</MenuItem>
                            <MenuItem className="text-black">🇺🇸 English</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex vertical align="center" justify="center" className="">
                    <img className="rounded-full md:h-96 h-[300px]" src="../../../images/perfil.jpeg" />
                    <img className="firma absolute md:bottom-72 bottom-48" src="../../../images/firma.png" />
                    <p className="mt-14 text-foto-800">______________________</p>
                    <Flex>
                        <Button type="text" className="text-lg text-foto-800">
                            Instagram
                        </Button>
                        <Button type="text" className="text-lg text-foto-800">
                            Portfolio
                        </Button>
                        <Button type="text" className="text-lg text-foto-800">
                            Blog
                        </Button>
                    </Flex>
                    <Button type="text" className="mt-10 text-7xl text-foto-800 font-display">
                        Galeria
                    </Button>
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