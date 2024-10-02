import { useEffect, useState } from "react";
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
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Empty, FloatButton, message } from "antd";
import { sendContactEmail } from "../../apiService/userApi";
import Loader from "react-js-loader";
import CardsOpinion from "../../components/Testimonials/cardsOpinion";
import { getOpinion } from "../../apiService/testimonialsApi";
import Marquee from 'react-fast-marquee';

function Home() {
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false)
    const [allOpinions, setAllOpinions] = useState([]);

    useEffect(() => {
        getAllOpinions();
        document.body.style.backgroundColor = "#646f66"
    })

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
        //setLoading(true)
        const testiminio = await getOpinion();
        const notRemoved = testiminio.filter((opinion) => !opinion.removeAt);
        if (testiminio.length) setAllOpinions(notRemoved);
        else setError(testiminio.message);
        //setLoading(false);
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
            < ScrollContainer className="bg-foto-900">
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div className="h-screen big-screen">
                            <div className="flex justify-between flex-wrap">
                                <div className="flex  justify-start mx-6">
                                    <a variant="text" className="font-display m-4 text-xl font-bold text-foto-200 link2" onClick={handleMyProfile}>
                                        My profile
                                    </a>
                                </div>
                                <div className="flex justify-end navbar mb-4">
                                    <a variant="text" className="font-display m-4 text-xl font-bold text-foto-900 link" onClick={handleAboutMe}>
                                        {t("header.about-me")}
                                    </a>
                                    <a variant="text" className="font-display m-4 text-xl font-bold text-foto-900 link" onClick={scrollToBottom}>
                                        {t("header.contact")}
                                    </a>
                                    <Menu>
                                        <MenuHandler>
                                            <a variant="text" className="font-display flex m-4 text-xl font-bold text-foto-900 link">
                                                {t("header.lenguage")}<FaAngleDown />
                                            </a>
                                        </MenuHandler>
                                        <MenuList className="bg-foto-700 border-foto-100">
                                            <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-black font-display" data-lenguage="es">🇪🇸 Español</MenuItem>
                                            <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-black font-display" data-lenguage="en">🇬🇧 English</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="imagen rounded-full h-[300px]" src="../../../images/perfil-cuadrado.png" alt="mariana-mendoza" />
                                <img className="firma absolute" src="../../../images/firma-verde.png" alt="mariana-mendoza" />
                                <h1 variant="text" className="encabezado text-6xl text-foto-900 font-cursiva font-extralight">
                                    {t("header.fotographer")}
                                </h1>
                                <p className="text-foto-900">__________________________________</p>
                                <div className="flex gap-6">
                                    <a variant="text" className="text-lg text-foto-900 font-display link" onClick={handleGallery}>
                                        {t("header.gallery")}
                                    </a>
                                    <a href="https://www.instagram.com/nanamendozago/" target="_blanck" variant="text" className="link text-lg text-foto-900 font-display">
                                        Instagram
                                    </a>
                                    <a variant="text" className="text-lg text-foto-900 font-display link" target='_blanck' href="../../../../public/files/portfolio.pdf" download={true}>
                                        Portfolio
                                    </a>
                                    <a variant="text" className="text-lg text-foto-900 font-display link" onClick={handleBlog}>
                                        Blog
                                    </a>
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
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.documentary")}
                                </p>
                                <img src="../../../public/images/periodismo.jpg" alt="documentary-photo-venezuela" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/retrato.jpg" alt="portrait-photo-blonde-girl" className="foto md:h-[200px]" />
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.portrait")}
                                </p>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.stage")}
                                </p>
                                <img src="../../../public/images/stage.jpg" alt="stage-photo-boys" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage >
                    <div className="flex flex-col justify-between bg-foto-900">
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.family")}
                                </p>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.sports")}
                                </p>
                                <img src="../../../public/images/camera.png" className="foto md:h-[200px]" />
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
                            <div className="flex justify-between m-10">
                                <img src="../../../public/images/paisaje.jpg" alt="travel-photo-snow" className="foto md:h-[200px]" />
                                <p className="font-revista text-foto-200 md:text-5xl text-xl">
                                    {t("services.travel")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>
            {/* feedbacks */}
            <div className="bg-foto-900">
                <p className="font-revista mx-6 mb-6 md:text-5xl text-xl text-foto-200" >{t("testimonials.testimonial")}</p>
                <div className='content-center'>
                    <Marquee pauseOnHover="true" autoFill="true">
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
            </div>
            {/* contacto */}
            <div id='contacto'>
                <div className="flex md:justify-start justify-center items-center contact h-screen" >
                    <div className="flex md:ml-48">
                        {loading ? <Loader type="bubble-ping" size={180} /> :
                            <form
                                className="form"
                            >
                                <p type="text" className="flex justify-center m-4 text-4xl text-foto-900 font-cursiva font-extralight">
                                    {t("contact.contactMe")}
                                </p>
                                <div className="flex flex-col font-display gap-4">
                                    <Input label={t("contact.name")} variant="standard" color="black" value={clientName} onChange={e => setClientName(e.target.value)} />
                                    <Input label="Email" variant="standard" color="black" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
                                    <Typography className="font-display text-sm font-bold">{t("contact.subject")}</Typography>
                                    <Textarea variant="standard" value={subject} onChange={e => setSubject(e.target.value)} />
                                </div>
                                <div className='flex justify-center'>
                                    <Button size="sm" variant="text" className="md:text-lg text-base font-display text-foto-900" fullWidth onClick={onEmailContact}>
                                        {t("contact.send")}
                                    </Button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
            {/* footer */}
            <footer footer className="w-full bg-foto-200 p-8" >
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
                                className="font-normal flex items-center"
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
            </footer >
        </>
    );
}

export default Home;