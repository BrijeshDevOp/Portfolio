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

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '/assets/RESUME_BRIJESH.pdf';
        link.download = 'RESUME_BRIJESH.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='home' className='hero'>
            <div className="img_frame"><img src={profile_img} alt="" srcset="" /></div>
            <h1><span>Hi , I'm Brijesh </span>Full Stack developer based in India </h1>
            <p>who loves building web apps that look great and work flawlessly. Always excited to learn new tech and create impactful projects.</p>
            <div className="connect-links">
                <a href="https://www.linkedin.com/in/brijesh-poojary-bb37512b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT5V6n4fUQ%2Bi3UcY17fC3%2FQ%3D%3D" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <span className="icon icons-tool-tip" data-tooltip="LinkedIn">
                        <img src={linked_in} alt="LinkedIn" />
                    </span>
                </a>
                <a href="https://github.com/BrijeshDevOp" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <span className="icon icons-tool-tip" data-tooltip="Github">
                        <img src={github} alt="Github" />
                    </span>
                </a>
                <a href="https://leetcode.com/u/brijeshpoojary9663/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <span className="icon icons-tool-tip" data-tooltip="LeetCode">
                        <img src={leet_code} alt="LeetCode" />
                    </span>
                </a>
                <a href="https://www.instagram.com/_brijesh_poojary_/?hl=en" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <span className="icon icons-tool-tip" data-tooltip="Instagram">
                        <img src={instagram} alt="Instagram" />
                    </span>
                </a>
                <div className="hero-resume" onClick={handleClick}>
                    Resume <img src={resume_download} alt="Download Resume" />                    
                </div>
            </div>
        </div>
    )
}

export default Hero
