import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";


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
                <div className="flex flex-wrap justify-start">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={handleHome}>
                        Home
                    </Button>
                </div>
                <h1>Hola, Galería</h1>
                {allPhotos.map((photo, index) => (
                    <div key={index}>
                        <p>{photo.createdAt ? photo.createdAt : null}</p>
                        <p>{photo._id ? photo._id : null}</p>
                        <p>{photo.theme1 ? photo.theme1 : null}</p>
                        <p>{photo.theme2 ? photo.theme2 : null}</p>
                        <p>{photo.imageGallery ? photo.imageGallery : null}</p>
                        <p>{photo.photoDate ? photo.photoDate : null}</p>
                    </div>
                ))}
                {error ? error : null}
            </div>
        </>
    );
}

export default Gallery;