import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getPhoto } from "../../apiService/photoApi";
import CardsGallery from "../../components/Gallery/cardsGallery";
import ModalPhoto from "../../components/Gallery/modalPhoto";
import { Button } from "@material-tailwind/react";
import { Empty, FloatButton, Input, message } from "antd";
import Loader from "react-js-loader";
import './gallery.scss'
import { authContext } from "../../components/Context/authContext";

const { Search } = Input;

const Gallery = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [dummy, refresh] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [filtering, setFiltering] = useState([]);
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        getAllPhotos();
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.40), rgba(240, 255, 255, 0.40)), url('../../../../images/fondo-profile.png')";
    }, [dummy]);

    const [t, i18n] = useTranslation("themes")
    const navigate = useNavigate();

    const { userId } = useContext(authContext)

    function handleHome() {
        navigate("/")
    }

    function handleBlog() {
        navigate("/blog")
    }

    const getAllPhotos = async () => {
        setLoading(true)
        const gallery = await getPhoto();
        const notRemoved = gallery.filter((photo) => !photo.removeAt);
        if (gallery.length) setAllPhotos(notRemoved);
        else setError(gallery.message);
        setLoading(false);
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
            const searchTerms = value.toLowerCase().split(" ");
            const filteredData = newList.filter(info => {
                return searchTerms.every(term =>
                    info.theme1.toLowerCase().includes(term) ||
                    info.theme2.toLowerCase().includes(term)
                )
            })
            if (filteredData.length !== 0) return setFiltering(filteredData);
            if (filteredData.length === 0) {
                messageApi.open({
                    type: 'warning',
                    content: 'No data'
                })
            }
        }
        if (!info) allPhotos;
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-dvh">
                <Loader type="bubble-ping" bgColor="#907a5f" size={180} />
            </div>
        )
    }

    return (
        <>
            {contextHolder}
            <FloatButton.Group
                shape="circle"
                style={{
                    insetInlineEnd: 24,
                }}
            >
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
            <div className="h-screen">
                <div className="flex justify-between flex-wrap">
                    <div className="flex  justify-start mx-6">
                        <button variant="text" className="link font-display text-foto-900 m-4 md:text-xl font-bold" onClick={handleHome}>
                            Home
                        </button>
                        <button variant="text" className="link font-display text-foto-900 m-4 md:text-xl font-bold" onClick={handleBlog}>
                            Blog
                        </button>
                    </div>
                    {userId ?
                        <button variant="text" className="link font-display text-foto-900 mx-10 md:text-xl font-bold" onClick={addPhoto}>
                            Upload photo
                        </button>
                        : null}
                </div>
                <div className="flex justify-end mr-6">
                    <Search className="w-[300px]"
                        placeholder={t("button.search1")}
                        allowClear
                        enterButton={t("button.search2")}
                        onSearch={onSearch}
                    />
                </div>
                <div className="flex flex-wrap justify-center place-items-center">
                    {allPhotos.length === 0 ? <Empty /> :
                        (filtering.length > 0 ? filtering : allPhotos).map(photo =>
                            <CardsGallery
                                key={photo._id}
                                photo={photo}
                                refresh={refresh}
                                visible={setOpen}
                                photoId={setSelectedPhoto}
                            />
                        )
                    }
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