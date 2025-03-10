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
                <ScrollPage>
                    <div className="flex flex-col">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="md:flex justify-between m-10">
                                <p className="text-foto-900 lg:text-5xl text-2xl">
                                    {t("services.documentary")}
                                </p>
                                <img src="/images/periodismo.avif" alt="documentary-photo-venezuela" className="foto lg:h-[450px] h-[220px] lg:m-6 mt-6" />
                            </div>
                            <div className="flex justify-between m-10">
                                <img src="/images/retrato.avif" alt="portrait-photo-blonde-girl" className="foto lg:h-[500px] h-[340px] lg:absolute lg:top-[230px]" />
                                <p className="text-foto-900 lg:text-5xl text-2xl lg:m-4 m-2 lg:absolute lg:top-[550px] lg:left-[360px] flex items-center">
                                    {t("services.portrait")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage className="lg:block flex flex-col justify-center">
                    <div className="flex flex-col">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex lg:justify-between justify-around justify-center lg:m-10 m-5 lg:flex-col">
                                <p className="text-foto-900 lg:text-5xl text-2xl lg:absolute lg:right-[440px] lg:top-32 mb-5 flex items-center">
                                    {t("services.sports")}
                                </p>
                                <img src="/images/crossfit.avif" alt="photo-crossfit" className="foto lg:self-end lg:h-[500px] h-[340px] lg:max-w-[360px] w-auto lg:m-6 lg:flex lg:items-end lg:mt-16" />
                            </div>
                            <div className="flex md:flex-row flex-col lg:justify-between lg:m-10 m-5">
                                <img src="/images/familia.avif" alt="family-photo" className="foto lg:h-[400px] lg:m-6 mt-6 md:absolute lg:top-[320px] h-[220px]" />
                                <p className="text-foto-900 lg:text-5xl text-2xl md:absolute md:top-[670px] md:left-[680px]">
                                    {t("services.family")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage>
                    <div className="flex flex-col lg:ml-10">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start items-end lg:m-10 m-5">
                                <p className="text-foto-900 lg:text-5xl text-2xl">
                                    {t("services.stage")}
                                </p>
                                <img src="/images/stage.avif" alt="stage-photo-boys" className="foto lg:h-[400px] h-[220px] lg:m-6 mt-6" />
                            </div>
                            <div className="flex lg:flex-row flex-col justify-between m-5">
                                <img src="/images/paisaje.avif" alt="travel-photo-snow" className="foto mb-2 lg:h-[550px] lg:w-auto h-[340px] w-[260px] lg:absolute lg:top-[190px]" />
                                <p className="text-foto-900 lg:text-5xl text-2xl lg:m-4 m-2 lg:absolute lg:top-[600px] lg:right-[350px] flex justify-center items-center">
                                    {t("services.travel")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer >
            {/* feedbacks */}
            <div div >
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
            </div >
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