import React from 'react'
import './Skills.css'
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

const Skills = () => {
    return (
        <div className="skills" id='skills'>
            <div className="skills-title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="skills-section">
                <div className="skills-container">
                    <div className="title left">Programming Languages</div>
                    <div className="icons">
                        <img src={python_icon} alt="" />
                        <img src={java_icon} alt="" />
                        <img src={c_icon} alt="" />
                    </div>
                    <div className="icons left">
                        <img src={html_icon} alt="" />
                        <img src={css_icon} alt="" />
                        <img src={js_icon} alt="" />
                        <img src={bootstrap_icon} alt="" />
                    </div>
                    <div className="title">WEB3</div>
                    <div className="title left">Front-End</div>
                    <div className="icons">
                        <img src={react_icon} alt="" />
                        <img src={flutter_icon} alt="" />
                    </div>
                    <div className="icons left">
                        <img src={django_icon} alt="" />
                        <img src={springboot_icon} alt="" />
                    </div>
                    <div className="title">Back-End</div>
                    <div className="title left">Data Base</div>
                    <div className="icons">
                        <img src={mysql_icon} alt="" />
                        <img src={sqlite_icon} alt="" />
                        <img src={postgrsql_icon} alt="" />
                    </div>
                    <div className="icons left">
                        <img src={github_icon} alt="" />
                        <img src={figma_icon} alt="" />
                        <img src={postman_icon} alt="" />
                        <img src={vercel_icon} alt="" />
                    </div>
                    <div className="title">Tools</div>
                </div>
            </div>
        </div>
    )
}

export default Skills