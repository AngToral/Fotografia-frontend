import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Gallery() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f1dede"
    })
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-start">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={handleHome}>
                        Home
                    </Button>
                </div>
                <h1>Hola, Galería</h1>
            </div>
        </>
    );
}

export default Gallery;