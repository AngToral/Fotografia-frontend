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
import { authContext } from "../../components/Context/authContext";
import { IoPersonCircleOutline } from "react-icons/io5";

function Home() {
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false)
    const [allOpinions, setAllOpinions] = useState([]);

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
                                        <a variant="text" className="font-display md:ml-4 m-2 md:text-2xl text-md font-semibold text-foto-900 link" onClick={handleMyProfile}>
                                            <IoPersonCircleOutline className="md:h-11 md:w-11 h-10 w-10" />
                                        </a>
                                        : null}
                                </div>
                                <div className="flex justify-end">
                                    <a variant="text" className="font-display m-2 text-xl font-bold text-foto-900 link" onClick={handleAboutMe}>
                                        {t("header.about-me")}
                                    </a>
                                    <a variant="text" className="font-display m-2 text-xl font-bold text-foto-900 link" onClick={scrollToBottom}>
                                        {t("header.contact")}
                                    </a>
                                    <Menu>
                                        <MenuHandler>
                                            <a variant="text" className="font-display flex m-2 text-xl font-bold text-foto-900 link">
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
                                <img className="imagen rounded-full h-[300px]" src="../../../images/perfil-cuadrado.avif" alt="mariana-mendoza" />
                                <img className="firma absolute" src="../../../images/firma-verde.avif" alt="mariana-mendoza" />
                                <h1 className="text-transparent">Mariana Mendoza Photographer Netherlands</h1>
                                <h2 variant="text" className="encabezado pt-2 md:text-6xl text-5xl text-foto-900 font-cursiva font-extralight">
                                    {t("header.fotographer")}
                                </h2>
                                <p className="text-foto-900">__________________________________</p>
                                <div className="flex gap-6">
                                    <a variant="text" className="text-lg text-foto-900 font-display link" onClick={handleGallery}>
                                        {t("header.gallery")}
                                    </a>
                                    <a href="https://www.instagram.com/nanamendozago/" target="_blanck" variant="text" className="link text-lg text-foto-900 font-display">
                                        Instagram
                                    </a>
                                    <a variant="text" className="text-lg text-foto-900 font-display link" target='_blanck' href="/files/portfolio-mariana-mendoza.pdf" download={true}>
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
                            <div className="md:flex justify-between m-10">
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl">
                                    {t("services.documentary")}
                                </p>
                                <img src="/images/periodismo.avif" alt="documentary-photo-venezuela" className="foto lg:h-[450px] h-[220px] lg:m-6 mt-6" />
                            </div>
                            <div className="flex justify-between m-10">
                                <img src="/images/retrato.avif" alt="portrait-photo-blonde-girl" className="foto lg:h-[500px] h-[340px] lg:absolute lg:top-[230px]" />
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl lg:m-4 m-2 lg:absolute lg:top-[550px] lg:left-[360px] flex items-center">
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
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl lg:absolute lg:right-[440px] lg:top-32 mb-5 flex items-center">
                                    {t("services.sports")}
                                </p>
                                <img src="/images/crossfit.avif" alt="photo-crossfit" className="foto lg:self-end lg:h-[500px] h-[340px] lg:max-w-[360px] w-auto lg:m-6 lg:flex lg:items-end lg:mt-16" />
                            </div>
                            <div className="flex md:flex-row flex-col lg:justify-between lg:m-10 m-5">
                                <img src="/images/familia.avif" alt="family-photo" className="foto lg:h-[400px] lg:m-6 mt-6 md:absolute lg:top-[320px] h-[220px]" />
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl md:absolute md:top-[670px] md:left-[680px]">
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
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl">
                                    {t("services.stage")}
                                </p>
                                <img src="/images/stage.avif" alt="stage-photo-boys" className="foto lg:h-[400px] h-[220px] lg:m-6 mt-6" />
                            </div>
                            <div className="flex lg:flex-row flex-col justify-between m-5">
                                <img src="/images/paisaje.avif" alt="travel-photo-snow" className="foto mb-2 lg:h-[550px] lg:w-auto h-[340px] w-[260px] lg:absolute lg:top-[190px]" />
                                <p className="font-revista text-foto-900 lg:text-5xl text-2xl lg:m-4 m-2 lg:absolute lg:top-[600px] lg:right-[350px] flex justify-center items-center">
                                    {t("services.travel")}
                                </p>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>
            {/* feedbacks */}
            <div>
                <div className="flex items-end">
                    <p className="font-revista m-6 mb-0 md:text-5xl text-2xl text-foto-900" >{t("testimonials.testimonial")}</p>
                    <a variant="text" className="text-lg text-foto-900 font-display link" onClick={handleAllTestimonials}>{t("testimonials.more")}</a>
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
            </div>
            {/* contacto */}
            < div id='contacto' >
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
                {/* footer */}
                <footer footer="true" className="w-full bg-foto-200 p-8" >
                    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-foto-200 text-center md:justify-between">
                        <img src="/images/camera.avif" alt="logo-ct" className="h-11" />
                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                            <li>
                                <a
                                    href="https://www.instagram.com/nanamendozago/"
                                    color="blue-gray"
                                    className="font-light transition-colors link flex items-center"
                                    target="_blanck"
                                >
                                    <FaInstagram className="h-10 mr-1" />
                                    @nanamendozago
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/mariana1995/"
                                    color="blue-gray"
                                    className="transition-colors link flex items-center font-light"
                                    target="_blanck"
                                >
                                    <FaLinkedin className="h-10 mr-1" />
                                    Linked In
                                </a>
                            </li>
                            <li>
                                <h2
                                    color="blue-gray"
                                    className="font-light flex items-center"
                                >
                                    <HiOutlineMail className="h-10 mr-1" />
                                    nanamendozago@gmail.com
                                </h2>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-4 border-foto-800" />
                    <div className="flex justify-center">
                        <Typography color="blue-gray" className="font-normal mr-1">
                            Website made by:
                        </Typography>
                        <a
                            href="https://angelatoral.es/"
                            color="blue-gray"
                            className=" font-light transition-colors link ml-1"
                            target="_blanck"
                        >
                            @AngToral
                        </a>
                    </div>
                </footer>
            </div >
        </ >
    );
}

export default Home;