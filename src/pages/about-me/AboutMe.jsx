import { Button } from "antd";
import { Animator, Fade, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './about-me.scss'
import { useEffect } from "react";

function AboutMe() {
    useEffect(() => {
        document.body.style.backgroundColor = "#EEE0C9"
    })

    const [t, i18n] = useTranslation("contact")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-start">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-900" onClick={handleHome}>
                        Home
                    </Button>
                </div>
                <div className="screen items-center m-6">
                    <div className="div-foto flex justify-center">
                        <img src="../../../images/about-me.png" className="foto" />
                    </div>
                    <div className="div-text">
                        <p className="ml-6 font-display"> {t("text.first")}</p>
                        <hr className="m-4 border-foto-800" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;