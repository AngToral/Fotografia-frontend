import { Button } from "antd";
import { Animator, Fade, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function AboutMe() {
    const [t, i18n] = useTranslation("home")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div className="h-screen">
                            <div className="flex justify-start">
                                <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-300" onClick={handleHome}>
                                    Home
                                </Button>
                            </div>
                            <div className="flex m-6">
                                <div className="w-1/2">
                                    <p className="h-full w-full">Imagen</p>
                                </div>
                                <div>
                                    <p className="ml-6">Texto</p>
                                </div>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </>
    );
}

export default AboutMe;