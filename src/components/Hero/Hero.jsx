import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_image.png'
import linked_in from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import leet_code from '../../assets/leetcode.svg'
import instagram from '../../assets/instagram.svg'
import resume_download from '../../assets/download.svg'


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <div className="img_frame"><img src={profile_img} alt="" srcset="" /></div>
            <h1><span>Hi , I'm Brijesh </span>Full Stack developer based in India </h1>
            <p>who loves building web apps that look great and work flawlessly. Always excited to learn new tech and create impactful projects.</p>
            <div className="connect-links">
                <img src={linked_in} alt="Linked-In" />
                <img src={github} alt="Github" />
                <img src={leet_code} alt="Leet code" />
                <img src={instagram} alt="Instagram" />
                <a
                    href="https://drive.google.com/open?id=1-YolaWhEUKMRSWHiXx9Hy0Vb1me8B0_6&usp=drive_fs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="hero-resume">
                        Resume <img src={resume_download} alt="Download Resume" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Hero
