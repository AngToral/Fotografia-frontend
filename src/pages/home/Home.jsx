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
        document.body.style.backgroundColor = "#646f66"
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
                                <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900">
                                    {t("header.about-me")}
                                </Button>
                                <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900">
                                    {t("header.contact")}
                                </Button>
                                <Menu>
                                    <MenuHandler>
                                        <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900">
                                            {t("header.lenguage")}<FaAngleDown />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="bg-foto-700 border-foto-100">
                                        <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-black font-display" data-lenguage="es">🇪🇸 Español</MenuItem>
                                        <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-black font-display" data-lenguage="en">🇬🇧 English</MenuItem>
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
                                    <Button type="text" className="text-lg text-foto-900 font-display">
                                        {t("header.gallery")}
                                    </Button>
                                    <Button href="https://www.instagram.com/nanamendozago/" target="_blanck" type="text" className="text-lg text-foto-900 font-display">
                                        Instagram
                                    </Button>
                                    <Button type="text" className="text-lg text-foto-900 font-display">
                                        Portfolio
                                    </Button>
                                    <Button type="text" className="text-lg text-foto-900 font-display">
                                        Blog
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                {/* servicios */}
                <ScrollPage >
                    <div className="flex flex-col">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.documentary")}
                                </p>
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.portrait")}
                                </p>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.stage")}
                                </p>
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage >
                    <div className="flex flex-col justify-between">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.events")}
                                </p>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.crossfit")}
                                </p>
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                                <p className="font-display text-foto-200 md:text-5xl">
                                    {t("services.travel")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                {/* contacto */}
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div>
                            <p style={{ fontSize: "30px" }} className="prueba h-screen font-display">Contacto</p>
                        </div>
                    </Animator>
                </ScrollPage>
                {/* footer */}
                <div >
                    <p style={{ fontSize: "30px" }} className="prueba h-[100px] font-display">Footer</p>
                </div>
            </ScrollContainer >
        </>
    );
}

export default Home;