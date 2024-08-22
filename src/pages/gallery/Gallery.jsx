import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";
import CardsGallery from "../../components/cardsGallery";


function Gallery() {
    useEffect(() => {
        getAllPhotos();
        document.body.style.backgroundColor = "#f1dede"
    })
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    const [allPhotos, setAllPhotos] = useState([])
    const [error, setError] = useState("")

    const getAllPhotos = async () => {
        const gallery = await getPhoto();
        const notRemoved = gallery.filter((photo) => !photo.removeAt);
        if (gallery.length) setAllPhotos(notRemoved);
        else setError(gallery.message);
    };

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-between">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={handleHome}>
                        Home
                    </Button>
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={handleHome}>
                        Nueva foto
                    </Button>
                </div>
                {/* {allPhotos.map((photo, index) => (
                    <div key={index}>
                        <p>Creado: {photo.createdAt ? photo.createdAt.split("T")[0] : null}</p>
                        <p>ID: {photo._id ? photo._id : null}</p>
                        <p>Tema1: {photo.theme1 ? photo.theme1 : null}</p>
                        <p>Tema2: {photo.theme2 ? photo.theme2 : null}</p>
                        <p>Fecha de la foto: {photo.photoDate ? photo.photoDate.split("T")[0] : null}</p>
                        <img className="h-[200px]" src={photo.imageGallery ? photo.imageGallery : "sin foto"} />
                        <hr className="my-4 border-foto-800" />
                    </div>
                ))} */}
                <div className="flex flex-wrap justify-center place-items-center">
                    {allPhotos.map(photo =>
                        <CardsGallery
                            id={photo._id}
                            theme1={photo.theme1}
                            theme2={photo.theme2}
                            imageGallery={photo.imageGallery}
                        />
                    )}
                </div>
                {error ? error : null}
            </div>
        </>
    );
}

export default Gallery;