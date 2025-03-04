import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {

    const navigate = useNavigate();
    const [t, i18n] = useTranslation("policy")

    useEffect(() => {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#F1F0E8";
    }, [])

    function handleHome() {
        navigate("/")
    }

    function handleBlog() {
        navigate("/blog")
    }

    function handleGallery() {
        navigate("/gallery")
    }

    return (
        <>
            <div className='h-screen'>
                <div className="flex justify-between flex-wrap">
                    <div className="flex  justify-start mx-6">
                        <button variant="text" className="link text-foto-900 m-4 md:text-2xl" onClick={handleHome}>
                            Home
                        </button>
                        <button variant="text" className="link text-foto-900 m-4 md:text-2xl" onClick={handleBlog}>
                            Blog
                        </button>
                        <button variant="text" className="link text-foto-900 m-4 md:text-2xl" onClick={handleGallery}>
                            {t("privacy.menu")}
                        </button>
                    </div>
                </div>
                <div className='flex justify-center mb-5'>
                    <h1 className="md:text-4xl text-2xl text-foto-900">{t("privacy.tittle")}</h1>
                </div>
                <div className='flex gap-2 flex-col mb-10'>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.1")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.2")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.3")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.4")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.5")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.6")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.7")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.8")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.9")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.10")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.11")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.12")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.13")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.14")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.15")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.16")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.17")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.18")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.19")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.20")}</p>
                    <p className="md:text-xl text-lg mx-20 underline">{t("privacy.21")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.22")}</p>
                    <p className="md:text-xl text-lg mx-20 font-normal">{t("privacy.23")}</p>
                    <p className="md:text-xl text-lg mx-20 font-normal">{t("privacy.24")}</p>
                    <p className="md:text-xl text-lg mx-20 font-normal">{t("privacy.25")}</p>
                    <p className="md:text-xl text-lg mx-20">{t("privacy.26")}</p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PrivacyPolicy