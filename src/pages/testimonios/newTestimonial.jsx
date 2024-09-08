import { useEffect } from "react";

function NewTestimonial() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../../public/images/paperOpiniones.jpg')"
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundPosition = "center center"
    })

    return (
        <>
            {/* {contextHolder} */}
            <div className="flex justify-center items-center h-screen">
                <div className="login">
                    <img className="flex justify-center w-64" src="../../../public/images/firma-rosa.png" />

                </div>
            </div>

        </>
    );
}

export default NewTestimonial;