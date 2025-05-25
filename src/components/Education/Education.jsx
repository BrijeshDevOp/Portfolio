import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeLineElements from '../../assets/data/timelineelements'
import degreeIcon from '../../assets/education/masters.png';
import schoolIcon from '../../assets/education/school.svg'


const Education = () => {
    let degreeIconStyles = { background: "#f9c74f" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div className="education" id='education'>
            <div className="education-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="education-section">
                <VerticalTimeline>
                    {
                        timeLineElements.map(element => {
                            let isDegreeIcon = element.icon === "degree"
                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isDegreeIcon ? degreeIconStyles : schoolIconStyles}
                                    icon={
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                                            <img
                                                src={isDegreeIcon ? degreeIcon : schoolIcon}
                                                alt="icon"
                                                style={{
                                                    width: "60%",
                                                    height: "60%",
                                                    objectFit: "contain",
                                                    borderRadius: "50%"
                                                }}
                                            />
                                        </div>
                                    }>
                                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                    <p id="description">{element.description}</p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education