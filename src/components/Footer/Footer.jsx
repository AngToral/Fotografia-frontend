import { Typography } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Navigate, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();
    const [t, i18n] = useTranslation("policy")

    function handlePrivacy() {
        navigate("/privacy-policy")
        window.scrollTo(0, 0);
    }

    return (
        <footer footer="true" className="w-full bg-foto-200 p-8" >
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-foto-200 text-center md:justify-between">
                <img src="/images/camera.avif" alt="logo-ct" className="h-11" />
                <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
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
                            hello@nanamendozago.com
                        </h2>
                    </li>
                    <li>
                        <button onClick={handlePrivacy} className="link font-light flex items-center">
                            {t("privacy.tittle")}
                        </button>
                    </li>
                </ul>
            </div>
            <hr className="my-4 border-foto-800" />
            <div className="flex justify-center">
                <p color="blue-gray" className="font-light mr-1">
                    Website made by:
                </p>
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
    )
}

export default Footer