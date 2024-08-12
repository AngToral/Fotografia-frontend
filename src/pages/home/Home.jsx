import { useEffect } from "react";
import './home.scss'

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f0ffff"
    })

    return (
        <>
            <div className="inicio flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold text-foto-100">
                    Hola, home
                </h1>
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