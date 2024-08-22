
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";
import CardsGallery from "../../components/cardsGallery";
import ModalPhoto from "../../components/modalPhoto";
import { Button } from "@material-tailwind/react";


const Gallery = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [dummy, refresh] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        getAllPhotos();
        document.body.style.backgroundColor = "#f1dede";
    }, [dummy]);

    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

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
                    <Button variant="text" className="link text-foto-500 m-4 md:text-base font-semibold" onClick={handleHome}>
                        Home
                    </Button>
                    <Button variant="text" className="link text-foto-500 m-4 md:text-base font-semibold" onClick={addPhoto}>
                        Upload photo
                    </Button>
                </div>
                <div className="flex flex-wrap justify-center place-items-center">
                    {allPhotos.map(photo =>
                        <CardsGallery
                            key={photo._id}
                            photo={photo}
                            refresh={refresh}
                        />
                    )}
                </div>
                <ModalPhoto
                    visible={open}
                    onCancel={onCancel}
                    refresh={refresh}
                />
                {error ? error : null}
            </div>
        </>
    );
}

export default Gallery;