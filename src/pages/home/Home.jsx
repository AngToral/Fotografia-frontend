import { useEffect, useState } from "react";
import './home.scss'
import { Button, Flex, } from "antd";
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
            <div className="inicio h-screen">
                <Flex justify="space-between">
                    <Flex>
                        <Button type="text" className="m-4 lg:text-xl font-bold text-foto-800">
                            Sobre mí
                        </Button>
                        <Button type="text" className="m-4 lg:text-xl font-bold text-foto-800">
                            Contacto
                        </Button>
                    </Flex>
                    <Menu>
                        <MenuHandler>
                            <Button type="text" className="m-4 lg:text-xl font-bold text-foto-800">Idioma</Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>🇪🇸 Español</MenuItem>
                            <MenuItem>🇺🇸 English</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex vertical align="center" justify="center" className="h-full">
                    <div>
                        <h1 className="text-3xl font-bold text-foto-800">Firma centro abajo</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-foto-800">Foto centro debajo</h1>
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