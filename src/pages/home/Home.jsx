import { useEffect, useState } from "react";
import './home.scss'
import { Typography } from "antd";
import { Button, Collapse, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar } from "@material-tailwind/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Home() {
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)),
            document.body.style.backgroundColor = "#f0ffff"
    })

    const [openMenu, setOpenMenu] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    const countries = [
        {
            flag: "🇺🇸",
            name: "English",
        },
        {
            flag: "🇪🇸",
            name: "Spain",
        },
    ];

    return (
        <>
            <div className="inicio flex flex-col justify-center items-center h-screen">
                <div className="">
                    <h1 className="text-3xl font-bold text-foto-100">
                        Hola, home
                    </h1>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-foto-100">
                        Hola, home
                    </h1>
                </div>
            </div>
            <div className="inicio flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold text-foto-100">
                    Seguimos
                </h1>
            </div>
        </>
    );
}

export default Home;