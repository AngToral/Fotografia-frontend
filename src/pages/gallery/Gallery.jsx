import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";
import CardsGallery from "../../components/cardsGallery";
import ModalPhoto from "../../components/modalPhoto";


function Gallery() {
    useEffect(() => {
        getAllPhotos();
        document.body.style.backgroundColor = "#f1dede"
    })
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    const [allPhotos, setAllPhotos] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const getAllPhotos = async () => {
        const gallery = await getPhoto();
        const notRemoved = gallery.filter((photo) => !photo.removeAt);
        if (gallery.length) setAllPhotos(notRemoved);
        else setError(gallery.message);
    };

    const addPhoto = () => {
        setSelectedPhoto(null)
        setOpen(true)
    };
    const onCancel = () => {
        setSelectedPhoto(null)
        setOpen(false)
    };

    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap justify-between">
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={handleHome}>
                        Home
                    </Button>
                    <Button type="text" className="m-4 md:text-xl text-base font-semibold text-foto-500" onClick={addPhoto}>
                        Subir foto
                    </Button>
                </div>
                <div className="flex flex-wrap justify-center place-items-center">
                    {allPhotos.map(photo =>
                        <CardsGallery
                            key={photo._id}
                            photo={photo}
                        />
                    )}
                </div>
                <ModalPhoto
                    visible={open}
                    onCancel={onCancel}
                />
                {error ? error : null}
            </div>
        </>
    );
}

export default Gallery;