import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";
import CardsGallery from "../../components/Gallery/cardsGallery";
import ModalPhoto from "../../components/Gallery/modalPhoto";
import { Button } from "@material-tailwind/react";
import { Input, message } from "antd";
//import { useTranslation } from "react-i18next";
const { Search } = Input;

const Gallery = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [dummy, refresh] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [filtering, setFiltering] = useState([]);

    //const [t, i18n] = useTranslation("themes")

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

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        const newList = [...allPhotos]
        if (info) {
            const filteredData = newList.filter(info =>
                info.theme1.toLowerCase().includes(value.toLowerCase()) ||
                info.theme2.toLowerCase().includes(value.toLowerCase())
            );
            if (filteredData.length !== 0) return setFiltering(filteredData);
            if (filteredData.length === 0) {
                message.success('No data')
            }
        }
        if (!info) allPhotos;
    }

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
                <div className="flex justify-end mr-6">
                    <Search className="w-[300px]"
                        placeholder="Buscar temas..."
                        allowClear
                        enterButton="Buscar"
                        onSearch={onSearch}
                    />
                </div>
                <div className="flex flex-wrap justify-center place-items-center">
                    {(filtering.length > 0 ? filtering : allPhotos).map(photo =>
                        <CardsGallery
                            key={photo._id}
                            photo={photo}
                            refresh={refresh}
                            visible={setOpen}
                            photoId={setSelectedPhoto}
                        />
                    )}
                </div>
                <ModalPhoto
                    visible={open}
                    onCancel={onCancel}
                    refresh={refresh}
                    photoId={selectedPhoto}
                />
                {error ? error : null}
            </div>
        </>
    );
}

export default Gallery;