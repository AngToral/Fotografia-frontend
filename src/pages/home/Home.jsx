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
            <div className="h-screen">
                <Flex justify="space-between">
                    <Flex>
                        <Button type="text" className="m-4 md:text-xl font-bold text-foto-800">
                            Sobre mí
                        </Button>
                        <Button type="text" className="m-4 md:text-xl font-bold text-foto-800">
                            Contacto
                        </Button>
                    </Flex>
                    <Menu>
                        <MenuHandler>
                            <Button type="text" className="m-4 md:text-xl font-bold text-foto-800">Idioma</Button>
                        </MenuHandler>
                        <MenuList className="bg-foto-700 border-foto-100">
                            <MenuItem className="text-black">🇪🇸 Español</MenuItem>
                            <MenuItem className="text-black">🇺🇸 English</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex vertical align="center" justify="center" className="">
                    <img className="firma" src="../../../images/firma.png" />
                    <img className="foto-inicio sm:h-[490px]" src="../../../images/perfil.png" />
                    <p className="text-foto-800">_______________</p>
                    <Flex>
                        <Button type="text" className="md:text-xl text-foto-800">
                            Instagram
                        </Button>
                        <Button type="text" className="md:text-xl text-foto-800">
                            Portfolio
                        </Button>
                        <Button type="text" className="md:text-xl text-foto-800">
                            Blog
                        </Button>
                    </Flex>
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