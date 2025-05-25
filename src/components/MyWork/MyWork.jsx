import React, { useEffect, useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import my_work_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MyWork = () => {
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleToggle = () => {
        setShowAll(prev => !prev);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    const visibleWork = showAll ? my_work_data : my_work_data.slice(0, 3);

    return (
        <div id='work' className='my-work'>
            <div className="my-work-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>

            <div className="my-work-container">
                {visibleWork.map((work, index) => (
                    <img
                        key={index}
                        src={work.w_img}
                        alt={`work-${index}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            <div className="my-work-show-more" onClick={handleToggle}>
                <p>{showAll ? 'Show Less' : 'Show More'}</p>
                <img
                    src={arrow_icon}
                    alt="toggle-arrow"
                    style={{
                        transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </div>

            {/* Fullscreen Modal with Swiper Carousel */}
            {showModal && (
                <div className="my-work-modal" onClick={closeModal}>
                    <div className="my-work-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <Swiper
                            initialSlide={currentIndex}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {my_work_data.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={item.w_img} alt={`slide-${idx}`} className="carousel-img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyWork;