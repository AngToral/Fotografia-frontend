import { Button, Typography } from "antd";
import { Animator, Fade, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './about-me.scss'
import { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function AboutMe() {
    useEffect(() => {
        document.body.style.backgroundColor = "#EEE0C9"
    })

    const [t, i18n] = useTranslation("contact")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }
    function handleGallery() {
        navigate("/")
    }
    function handleBlog() {
        navigate("/")
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-start">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900" onClick={handleHome}>
                        Home
                    </Button>
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900" onClick={handleGallery}>
                        {t("menu.gallery")}
                    </Button>
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900" onClick={handleBlog}>
                        Blog
                    </Button>
                </div>
                <div className="screen items-center m-6">
                    <div className="div-foto flex justify-center">
                        <img src="../../../images/about-me.png" className="foto" />
                    </div>
                    <div className="div-text">
                        <p className="mx-6 font-display"> {t("text.first")}</p>
                        <p className="m-6 font-display"> Idiomas, experiencias más relevantes</p>
                        <hr className="m-4 border-foto-800" />
                        <div className="flex flex-wrap items-center justify-center">
                            <a
                                href="https://www.instagram.com/nanamendozago/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-800 focus:text-foto-800"
                            >
                                <FaInstagram className="h-10 w-7 mr-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mariana1995/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-800 focus:text-foto-800"
                            >
                                <FaLinkedin className="h-10 w-7 mr-4" />
                            </a>
                            <HiOutlineMail className="h-10 w-7 mr-1" />
                            <Typography
                                color="blue-gray"
                                className="font-display transition-colors flex items-center"
                            >
                                nanamendozago@gmail.com
                            </Typography>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AboutMe;