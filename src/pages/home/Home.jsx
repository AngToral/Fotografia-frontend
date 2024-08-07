import { useEffect } from "react";


function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f0ffff"
    })

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-foto-100">
                    Hola, home
                </h1>
            </div>
        </>
    );
}

export default Home;