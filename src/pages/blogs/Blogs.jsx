import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getEntry } from "../../apiService/entryApi";
import CardsBlogs from "../../components/Blog/cardsBlogs";
import { Empty, FloatButton } from "antd";
import Loader from "react-js-loader";
import ModalEntry from "../../components/Blog/modalEntry";
import { authContext } from "../../components/Context/authContext";

function Blogs() {
    const [error, setError] = useState("");
    const [allEntrys, setAllEntrys] = useState("");
    const [dummy, refresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const { userId } = useContext(authContext)

    useEffect(() => {
        getAllEntrys();
        document.body.style.backgroundImage = "url('../../../../images/fondo-blog.png')";
    }, [dummy]);

    const [t, i18n] = useTranslation("home")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }
    function handleGallery() {
        navigate("/gallery")
    }

    const addEntry = () => {
        console.log("añade entrada de blog")
        setOpen(true)
    }

    const onCancel = () => {
        setOpen(false)
    }


    const getAllEntrys = async () => {
        setLoading(true)
        const blogs = await getEntry();
        const notRemoved = blogs.filter((entry) => !entry.removeAt);
        if (blogs.length) setAllEntrys(notRemoved);
        else setError(blogs.message);
        setLoading(false);
    };

    return (
        <>
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
                        <button variant="text" className="link font-display text-foto-300 m-4 md:text-xl font-bold" onClick={handleHome}>
                            Home
                        </button>
                        <button variant="text" className="link font-display text-foto-300 m-4 md:text-xl font-bold" onClick={handleGallery}>
                            {t("header.gallery")}
                        </button>
                    </div>
                    {userId ?
                        <button variant="text" className="link font-display text-foto-300 mx-10 md:text-xl font-bold" onClick={addEntry}>
                            New entry
                        </button>
                        : null}
                </div>
                <div>
                    <div className="flex flex-wrap justify-center place-items-center m-10">
                        {allEntrys.length === 0 ? <Empty /> :
                            (loading ? <Loader type="bubble-ping" bgColor="#EEE0C9" size={180} /> : allEntrys.map(entry =>
                                <CardsBlogs
                                    key={entry._id}
                                    entry={entry}
                                    refresh={refresh}
                                    visible={setOpen}
                                    entryId={setSelectedEntry}
                                />
                            ))
                        }
                    </div>
                </div>
                <ModalEntry
                    visible={open}
                    onCancel={onCancel}
                    refresh={refresh}
                    entryId={selectedEntry}
                />
                {error ? error : null}
            </div>
        </>
    );
}

export default Blogs;