import React, { useState } from 'react';
import './Certificates.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import certificates_data from '../../assets/data/certificates_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import certificate_icon from '../../assets/badge.png';

const Certificates = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (index) => {
        setExpandedCards((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div id='certificates' className="certificates">
            <div className="certificates-title">
                <h1>My Certificates</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="certificates-container">
                {certificates_data.map((certificate, index) => {
                    const isExpanded = expandedCards[index];
                    return (
                        <div key={index} className="certificates-formate">
                            <h3>{certificate.c_no}</h3>
                            <h2>{certificate.c_name}</h2>
                            <div>
                                <h4>{certificate.c_credits}</h4> 
                                <img src={certificate_icon} alt="badge" />
                                - certified
                            </div>
                            <p className={`cert-desc ${isExpanded ? 'expanded' : ''}`}>
                                {certificate.c_desc}
                            </p>

                            <div className="certificates-footer">
                                <div className="certificates-read-more" onClick={() => toggleCard(index)}>
                                    <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                                    <img
                                        src={arrow_icon}
                                        alt="toggle-icon"
                                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>

                                <a
                                    href={certificate.c_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificates-view-link"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Certificates;