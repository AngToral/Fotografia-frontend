import React from 'react';
import { useEffect, useState } from "react";
import './home.scss'
import { Button } from "antd";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Input,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";


function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#646f66"
    })
    const [t, i18n] = useTranslation("home")

    const scrollToBottom = () => {
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    };

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
                                <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900" onClick={scrollToBottom}>
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
                <ScrollPage>
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
                                    {t("services.sports")}
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
                {/* feedbacks */}
                <ScrollPage className="bg-white">
                    <p >Feedbak</p>
                </ScrollPage>
                {/* contacto */}
                <div id='contacto'>
                    <ScrollPage className="flex md:justify-start justify-center items-center contact" >
                        <Animator animation={Fade()} >
                            <div className="flex md:ml-48">
                                <form
                                    className="form"
                                >
                                    <p type="text" className="flex justify-center m-4 text-4xl text-foto-900 font-cursiva font-extralight">
                                        {t("contact.contactMe")}
                                    </p>
                                    <div className="flex flex-col font-display gap-4">
                                        <Input label={t("contact.name")} variant="standard" color="black" />
                                        <Input label="Email" variant="standard" color="black" />
                                        <Typography className="font-display text-sm font-bold">{t("contact.subject")}</Typography>
                                        <Textarea variant="standard" />
                                    </div>
                                    <Button className="md:text-xl text-base font-display text-foto-900" block type="text">
                                        {t("contact.send")}
                                    </Button>
                                </form>
                            </div>
                        </Animator>
                    </ScrollPage>
                </div>
                {/* footer */}
                <footer className="w-full bg-foto-200 p-8">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-foto-200 text-center md:justify-between">
                        <img src="../../../public/images/camera.png" alt="logo-ct" className="h-11" />
                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                            <li>
                                <Typography
                                    as="a"
                                    href="https://www.instagram.com/nanamendozago/"
                                    color="blue-gray"
                                    className="font-normal transition-colors hover:text-foto-800 focus:text-foto-800 flex items-center"
                                    target="_blanck"
                                >
                                    <FaInstagram className="h-10 mr-1" />
                                    @nanamendozago
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    as="a"
                                    href="https://www.linkedin.com/in/mariana1995/"
                                    color="blue-gray"
                                    className="font-normal transition-colors hover:text-foto-800 focus:text-foto-800 flex items-center"
                                    target="_blanck"
                                >
                                    <FaLinkedin className="h-10 mr-1" />
                                    Linked In
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    color="blue-gray"
                                    className="font-normal transition-colors flex items-center"
                                >
                                    <HiOutlineMail className="h-10 mr-1" />
                                    nanamendozago@gmail.com
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-4 border-foto-800" />
                    <div className="flex justify-center">
                        <Typography color="blue-gray" className="font-normal mr-1">
                            Website made by:
                        </Typography>
                        <Typography
                            as="a"
                            href="https://angelatoral.es/"
                            color="blue-gray"
                            className=" font-normal transition-colors hover:text-foto-800 focus:text-foto-800"
                            target="_blanck"
                        >
                            @AngToral
                        </Typography>
                    </div>
                </footer>
            </ScrollContainer >
        </>
    );
}

export default Home;