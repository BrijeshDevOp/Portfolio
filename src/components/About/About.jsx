import React from 'react';
import './About.css'; 
import theme_pattern from '../../assets/theme_pattern.svg'
import java_icon from '../../assets/tech_logo/java.png'
import c_icon from '../../assets/tech_logo/c.png'
import python_icon from '../../assets/tech_logo/python.png'
import html_icon from '../../assets/tech_logo/html.png'
import css_icon from '../../assets/tech_logo/css.png'
import js_icon from '../../assets/tech_logo/javascript.png'
import bootstrap_icon from '../../assets/tech_logo/bootstrap.png'
import flutter_icon from '../../assets/tech_logo/flutter.png'
import react_icon from '../../assets/tech_logo/reactjs.png'
import springboot_icon from '../../assets/tech_logo/springboot.png'
import django_icon from '../../assets/tech_logo/django.png'
import sqlite_icon from '../../assets/tech_logo/sqlite.png'
import mysql_icon from '../../assets/tech_logo/mysql.png'
import postgrsql_icon from '../../assets/tech_logo/postgre.png'
import github_icon from '../../assets/tech_logo/github.png'
import figma_icon from '../../assets/tech_logo/figma.png'
import postman_icon from '../../assets/tech_logo/postman.png'
import vercel_icon from '../../assets/tech_logo/vercel.png'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="about-title">
                <h1>About</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <p>
                        Creative and detail-oriented, I enjoy approaching challenges with a problem-solving mindset and a focus on clarity and efficiency.
                        I'm driven by curiosity and always eager to explore new perspectives and ideas.
                    </p>
                    <p>
                        I value collaboration and believe in the power of communication and teamwork to bring the best outcomes.
                        Adaptable and committed, I strive for consistent growth both personally and professionally.
                    </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-right">
                    <h2 className="about-skills-title">Skills</h2>
                    <div className="about-skills-container">
                        <div className="about-skills-tile">
                            <span className="title1">Programming Languages</span>
                            <span className="icons tool-tip" data-tooltip="Java"><img src={java_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Python"><img src={python_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="C"><img src={c_icon} alt="" srcset="" /></span>
                        </div>
                        <hr />
                        <div className="about-skills-tile">
                            <span className="title2">WEB3</span>
                            <span className="icons tool-tip" data-tooltip="HTML"><img src={html_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="CSS"><img src={css_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="JavaScript"><img src={js_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Bootstrap"><img src={bootstrap_icon} alt="" srcset="" /></span>
                        </div>
                        <hr />
                        <div className="about-skills-tile">
                            <span className="title3">Front-End</span>
                            <span className="icons tool-tip" data-tooltip="React"><img src={react_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Flutter"><img src={flutter_icon} alt="" srcset="" /></span>
                        </div>
                        <hr />
                        <div className="about-skills-tile">
                            <span className="title4">Back-End</span>
                            <span className="icons tool-tip" data-tooltip="Springboot"><img src={springboot_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Django"><img src={django_icon} alt="" srcset="" /></span>
                        </div>
                        <hr />
                        <div className="about-skills-tile">
                            <span className="title5">Tools</span>
                            <span className="icons tool-tip" data-tooltip="Github"><img src={github_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Figma"><img src={figma_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Postman"><img src={postman_icon} alt="" srcset="" /></span>
                            <span className="icons tool-tip" data-tooltip="Vercel"><img src={vercel_icon} alt="" srcset="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
