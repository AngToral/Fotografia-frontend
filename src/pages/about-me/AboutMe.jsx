import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './about-me.scss'
import { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function AboutMe() {

    useEffect(() => {
        //document.body.style.backgroundColor = "#EEE0C9"
        //document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url('../../../../images/gallery.png')";

    }, [])

    const [t, i18n] = useTranslation("contact")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }
    function handleGallery() {
        navigate("/gallery")
    }
    function handleBlog() {
        navigate("/")
    }

    return (
        <>
            <div className="h-screen fondo">
                <div className="flex flex-wrap justify-start ml-6">
                    <button variant="text" className="link m-4 font-display md:text-xl text-base font-bold text-foto-500" onClick={handleHome}>
                        Home
                    </button>
                    <button variant="text" className="link m-4 font-display md:text-xl text-base font-bold text-foto-500" onClick={handleGallery}>
                        {t("menu.gallery")}
                    </button>
                    <button variant="text" className="link m-4 font-display md:text-xl text-base font-bold text-foto-500" onClick={handleBlog}>
                        Blog
                    </button>
                </div>
                <div className="screen items-center m-6">
                    <div className="div-foto flex justify-center">
                        <img src="../../../images/about-me.png" className="foto" />
                    </div>
                    <div className="div-text">
                        <p className="mx-6 font-revista text-lg"> {t("text.first")}</p>
                        <p className="m-6 font-revista text-lg"> Idiomas, experiencias más relevantes</p>
                        <hr className="m-4 border-foto-800" />
                        <div className="flex flex-wrap items-center justify-center">
                            <a
                                href="https://www.instagram.com/nanamendozago/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-800 focus:text-foto-800 mb-4"
                            >
                                <FaInstagram className="h-10 w-7 mr-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mariana1995/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-800 focus:text-foto-800 mb-4"
                            >
                                <FaLinkedin className="h-10 w-7 mr-4" />
                            </a>
                            <HiOutlineMail className="h-10 w-7 mr-1 mb-4" />
                            <Typography
                                color="blue-gray"
                                className="font-display flex items-center mb-4"
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