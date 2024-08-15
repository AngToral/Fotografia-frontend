import { useEffect, useState } from "react";
import './home.scss'
import { Button } from "antd";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F1F0E8"
    })
    const [t, i18n] = useTranslation("home")

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            {/* header */}
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div className="h-screen big-screen">
                            <div className="flex justify-end">
                                <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">
                                    {t("header.about-me")}
                                </Button>
                                <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">
                                    {t("header.contact")}
                                </Button>
                                <Menu>
                                    <MenuHandler>
                                        <Button type="text" className="m-4 md:text-xl text-base font-bold text-foto-900">
                                            {t("header.lenguage")}<FaAngleDown />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="bg-foto-700 border-foto-100">
                                        <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-black" data-lenguage="es">🇪🇸 Español</MenuItem>
                                        <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-black" data-lenguage="en">🇬🇧 English</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="imagen rounded-full h-[300px]" src="../../../images/perfil-cuadrado.png" alt="mariana-mendoza" />
                                <img className="firma absolute" src="../../../images/firma-verde.png" alt="mariana-mendoza" />
                                <h1 type="text" className="encabezado text-6xl text-foto-900 font-cursiva font-extralight">
                                    {t("header.fotographer")}
                                </h1>
                                <p className="text-foto-900">__________________________________</p>
                                <div className="flex">
                                    <Button type="text" className="text-lg text-foto-900">
                                        {t("header.gallery")}
                                    </Button>
                                    <Button href="https://www.instagram.com/nanamendozago/" target="_blanck" type="text" className="text-lg text-foto-900">
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
                    </Animator>
                </ScrollPage>
                {/* servicios */}
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <p className="font-display" style={{ fontSize: "30px" }}>Servicios</p>
                    </Animator>
                    <Animator animation={MoveIn(1000, 10)}>
                        <p className="font-display" style={{ fontSize: "30px" }}>Servicios</p>
                    </Animator>
                </ScrollPage>
                {/* contacto */}
                <div>
                    <p style={{ fontSize: "30px" }} className="prueba h-screen font-display">Contacto</p>
                </div>
                {/* footer */}
                <div >
                    <p style={{ fontSize: "30px" }} className="prueba h-[100px] font-display">Footer</p>
                </div>
            </ScrollContainer >
        </>
    );
}

export default Home;