import { useEffect, useState, useContext } from "react";
import './home.scss'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Input,
    Typography,
    Textarea,
    Button
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { useNavigate } from "react-router-dom";
import { Empty, FloatButton, message } from "antd";
import { sendContactEmail } from "../../apiService/userApi";
import Loader from "react-js-loader";
import CardsOpinion from "../../components/Testimonials/cardsOpinion";
import { getOpinion } from "../../apiService/testimonialsApi";
import Marquee from 'react-fast-marquee';
import { authContext } from "../../components/Context/authContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import Footer from "../../components/Footer/Footer";

function Home() {
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false)
    const [allOpinions, setAllOpinions] = useState([]);
    const [accept, setAccept] = useState(false);

    const { userId } = useContext(authContext)

    useEffect(() => {
        getAllOpinions();
        document.body.style.backgroundImage = "url('../../../../images/fondo-home.avif')";
    }, [])

    const [t, i18n] = useTranslation("home")
    const navigate = useNavigate();

    const scrollToBottom = () => {
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    };

    function handleAboutMe() {
        navigate("/aboutme")
    }
    function handleGallery() {
        navigate("/gallery")
    }
    function handleBlog() {
        navigate("/blog")
    }
    function handleMyProfile() {
        navigate("/profile")
    }
    function handleAllTestimonials() {
        navigate("/testimonials")
    }
    function handlePrivacy() {
        navigate("/privacy-policy")
        window.scrollTo(0, 0);
    }

    const onEmailContact = async () => {
        if (clientName === "" || clientEmail === "" || subject === "") {
            messageApi.open({
                type: 'warning',
                content: `${t("contact.warning")}`
            })
        } else {
            console.log(clientName, clientEmail, subject)
            setLoading(true)
            await sendContactEmail({ clientName, clientEmail, subject })
            setLoading(false)
            messageApi.open({
                type: 'success',
                content: `${t("contact.success")}`
            })
            setClientName("")
            setClientEmail("")
            setSubject("")
        }
    }

    const getAllOpinions = async () => {
        const testiminio = await getOpinion();
        const notRemoved = testiminio.filter((opinion) => !opinion.removeAt);
        if (testiminio.length) setAllOpinions(notRemoved);
        else setError(testiminio.message);
    }

    function bloquearBotonDerecho(event) {
        event.preventDefault();
    }
    document.addEventListener("contextmenu", bloquearBotonDerecho)

    return (
        <>
            {contextHolder}
            <FloatButton.Group
                shape="circle"
                style={{
                    insetInlineEnd: 24,
                }}
            >
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
            {/* header */}
            < ScrollContainer>
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div className="h-screen big-screen">
                            <div className="flex justify-between flex-wrap navbar h-[60px] items-center">
                                <div className="flex justify-start">
                                    {userId ?
                                        <a variant="text" className="md:ml-4 m-2 md:text-2xl text-md text-foto-900 link" onClick={handleMyProfile}>
                                            <IoPersonCircleOutline className="md:h-11 md:w-11 h-10 w-10" />
                                        </a>
                                        : null}
                                </div>
                                <div className="flex justify-end">
                                    <a variant="text" className="m-2 text-xl text-foto-900 font-light link" onClick={handleAboutMe}>
                                        {t("header.about-me")}
                                    </a>
                                    <a variant="text" className="m-2 text-xl text-foto-900 font-light link" onClick={scrollToBottom}>
                                        {t("header.contact")}
                                    </a>
                                    <Menu>
                                        <MenuHandler>
                                            <a variant="text" className="flex m-2 text-xl text-foto-900 font-light link">
                                                {t("header.lenguage")}<FaAngleDown />
                                            </a>
                                        </MenuHandler>
                                        <MenuList className="bg-foto-700 border-foto-100">
                                            <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-black" data-lenguage="es">🇪🇸 Español</MenuItem>
                                            <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-black" data-lenguage="en">🇬🇧 English</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="imagen rounded-full h-[300px]" src="../../../images/perfil-cuadrado.avif" alt="mariana-mendoza" />
                                <img className="firma absolute" src="../../../images/firma-verde.avif" alt="mariana-mendoza" />
                                <h1 className="text-transparent">Mariana Mendoza Photographer Netherlands</h1>
                                <h2 variant="text" className="encabezado pt-2 md:text-7xl text-5xl text-foto-900 pinyon-script-regular">
                                    {t("header.fotographer")}
                                </h2>
                                <div className="flex flex-col gap-1 mt-3 items-center">
                                    <div className="gap-6 flex">
                                        <a variant="text" className="text-lg text-foto-900 font-light link uppercase" onClick={handleGallery}>
                                            {t("header.gallery")}
                                        </a>
                                        <a href="https://www.instagram.com/nanamendozago/" target="_blanck" variant="text" className="uppercase link text-lg text-foto-900 font-light">
                                            Instagram
                                        </a>
                                    </div>
                                    <div className="gap-6 flex">
                                        <a variant="text" className="uppercase text-lg text-foto-900 font-light link" target='_blanck' href="/files/portfolio-mariana-mendoza.pdf" download={true}>
                                            Portfolio
                                        </a>
                                        <a variant="text" className="uppercase text-lg text-foto-900 font-light link" onClick={handleBlog}>
                                            Blog
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                {/* servicios */}

                <div className="flex flex-col m-10 gap-5 items-center mb-28 mt-20">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.sports")}
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        {/* vertical */}
                        <img src="/images/crossfit.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[400px]" />
                        <img src="/images/boxing.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[400px]" />
                        {/* horizontal */}
                        <img src="/images/sports-boxing.avif" alt="family-photo" className="foto max-w-[800px]" />
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 items-center mb-28">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.family")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {/* vertical */}
                        <img src="/images/family.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[450px]" />
                        {/* horizontal */}
                        <div className="flex flex-col justify-center items-center gap-5">
                            <img src="/images/family2.avif" alt="family-photo" className="foto max-h-[350px]" />
                            <img src="/images/familia.avif" alt="family-photo" className="foto max-h-[350px]" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 items-center mb-28">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.couple")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {/* vertical */}
                        <img src="/images/wedding.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                        <img src="/images/couple.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                        <img src="/images/couples.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 mb-28 items-center">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.documentary")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {/* horizontal */}
                        <img src="/images/periodismo.avif" alt="family-photo" className="foto max-h-[400px]" />
                        <img src="/images/periodismo2.avif" alt="family-photo" className="foto max-h-[400px]" />
                        <img src="/images/periodismo3.avif" alt="family-photo" className="foto max-h-[600px]" />
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 mb-28 items-center">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.portrait")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {/* vertical */}
                        <img src="/images/retrato.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[400px]" />
                        <img src="/images/portrait.avif" alt="family-photo" className="foto max-h-[500px]" />
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 items-center mb-28">
                    <p className="text-foto-900 lg:text-5xl text-2xl flex items-center">
                        {t("services.travel")}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {/* vertical */}
                        <img src="/images/paisaje.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                        <img src="/images/paisajes2.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                        <img src="/images/paisajes.avif" alt="photo-crossfit" className="foto lg:flex lg:items-end max-w-[350px]" />
                    </div>
                </div>

                <div className="flex flex-col m-10 gap-5 mb-28">
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        <p className="text-foto-900 lg:text-5xl text-2xl flex items-center w-1/3">
                            {t("services.stage")}
                        </p>
                        {/* horizontal */}
                        <img src="/images/stage.avif" alt="family-photo" className="foto max-h-[450px]" />
                    </div>
                </div>

            </ScrollContainer >
            {/* feedbacks */}
            < div >
                <div className="flex items-end">
                    <p className="m-6 mb-0 md:text-5xl text-2xl text-foto-900" >{t("testimonials.testimonial")}</p>
                    <a variant="text" className="text-lg text-foto-900 link" onClick={handleAllTestimonials}>{t("testimonials.more")}</a>
                </div>
                <div className='content-center'>
                    <Marquee autoFill="true">
                        {allOpinions.length === 0 ? <Empty /> :
                            allOpinions.map(opinion =>
                                <CardsOpinion
                                    key={opinion._id}
                                    opinion={opinion}
                                />
                            )
                        }
                    </Marquee>
                </div>
            </ div>
            {/* contacto */}
            < div id='contacto' >
                <div className="flex md:justify-start justify-center items-center contact h-screen" >
                    <div className="flex md:ml-48">
                        {loading ? <Loader type="bubble-ping" size={180} /> :
                            <form
                                className="form"
                            >
                                <p type="text" className="flex justify-center m-4 text-4xl text-foto-900 font-extralight pinyon-script-regular">
                                    {t("contact.contactMe")}
                                </p>
                                <div className="flex flex-col gap-4">
                                    <Input
                                        labelProps={{
                                            className: "!font-light"
                                        }}
                                        label={t("contact.name")} variant="standard" color="black" value={clientName} onChange={e => setClientName(e.target.value)} />
                                    <Input
                                        labelProps={{
                                            className: "!font-light"
                                        }}
                                        label="Email" variant="standard" color="black" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
                                    <p className="text-sm">{t("contact.subject")}</p>
                                    <Textarea variant="standard" value={subject} onChange={e => setSubject(e.target.value)} />
                                    <div className="flex flex-row gap-2 mb-2">
                                        <input type="checkbox" onClick={() => setAccept(!accept)} />
                                        <p className="text-sm font-light">
                                            {t("contact.accept")}&nbsp;
                                            <button className="underline font-light" onClick={handlePrivacy}>{t("contact.privacy")}</button>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Button size="sm" variant="text" disabled={!accept} className="md:text-lg text-base text-foto-900 josefin-sans font-normal" fullWidth onClick={onEmailContact}>
                                        {t("contact.send")}
                                    </Button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
                {/* footer */}
                <Footer />
            </div >
        </ >
    );
}

export default Home;