import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './about-me.scss'
import { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "../../components/Footer/Footer";

function AboutMe() {

    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.05), rgba(240, 255, 255, 0.05)), url('../../../../images/gallery.avif')";
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
        navigate("/blog")
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-start ml-6">
                    <button variant="text" className="link m-4 md:text-2xl text-base text-foto-200" onClick={handleHome}>
                        Home
                    </button>
                    <button variant="text" className="link m-4 md:text-2xl text-base text-foto-200" onClick={handleGallery}>
                        {t("menu.gallery")}
                    </button>
                    <button variant="text" className="link m-4 md:text-2xl text-base text-foto-200" onClick={handleBlog}>
                        Blog
                    </button>
                </div>
                <div className="screen items-center m-6">
                    <div className="div-foto flex justify-center">
                        <img src="../../../images/about-me.avif" className="foto-about-me" />
                    </div>
                    <div className="div-text textaboutme">
                        <p className="mx-6 text-nani-50 md:text-lg"> {t("text.first")}</p>
                        <p className="m-6 text-nani-50 md:text-lg"> {t("text.second")}</p>
                        <p className="m-6 text-nani-50 md:text-lg"> {t("text.third")}</p>
                        <hr className="m-4 border-foto-400" />
                        <div className="flex flex-wrap items-center justify-center">
                            <a
                                href="https://www.instagram.com/nanamendozago/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-700 focus:text-foto-700 mb-4 text-nani-50"
                            >
                                <FaInstagram className="h-10 w-7 mr-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mariana1995/"
                                target="_blanck"
                                className="transition-colors hover:text-foto-700 focus:text-foto-700 mb-4 text-nani-50"
                            >
                                <FaLinkedin className="h-10 w-7 mr-4" />
                            </a>
                            <HiOutlineMail className="h-10 w-7 mr-1 mb-4 text-nani-50" />
                            <p
                                color="blue-gray"
                                className="flex items-center mb-4 text-nani-50"
                            >
                                hello@nanamendozago.com
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    );
}

export default AboutMe;