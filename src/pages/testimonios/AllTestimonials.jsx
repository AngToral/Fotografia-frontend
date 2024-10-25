import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getOpinion } from '../../apiService/testimonialsApi';
import { Empty, FloatButton } from 'antd';
import CardsOpinion from '../../components/Testimonials/cardsOpinion';
import CardsAllOpinions from '../../components/Testimonials/CardsAllOpinions';

const AllTestimonials = () => {
    const [allOpinions, setAllOpinions] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getAllOpinions();
        document.body.style.backgroundColor = "#646f66";
    }, [])

    const [t, i18n] = useTranslation("contact")
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }
    function handleGallery() {
        navigate("/gallery")
    }
    function handleBlog() {
        navigate("/blog")
    }

    const getAllOpinions = async () => {
        const testiminio = await getOpinion();
        const notRemoved = testiminio.filter((opinion) => !opinion.removeAt);
        if (testiminio.length) setAllOpinions(notRemoved);
        else setError(testiminio.message);
    }

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
                <div className="flex flex-wrap justify-start ml-6">
                    <button variant="text" className="link2 m-4 font-display md:text-xl text-base font-bold text-foto-200" onClick={handleHome}>
                        Home
                    </button>
                    <button variant="text" className="link2 m-4 font-display md:text-xl text-base font-bold text-foto-200" onClick={handleGallery}>
                        {t("menu.gallery")}
                    </button>
                    <button variant="text" className="link2 m-4 font-display md:text-xl text-base font-bold text-foto-200" onClick={handleBlog}>
                        Blog
                    </button>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {allOpinions.length === 0 ? <Empty /> :
                        allOpinions.map(opinion =>
                            <CardsAllOpinions
                                key={opinion._id}
                                opinion={opinion}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default AllTestimonials