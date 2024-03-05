import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification_button button--flex" } onClick={() => toggleTab(1)} >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div  className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification_button button--flex" } onClick={() => toggleTab(2)} >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full-stack Development</h3>
                            <span className="qualification__subtitle">Nxtwave Disruptive Technologies</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">M.E - Structural Engineering</h3>
                            <span className="qualification__subtitle">Senguthar Engineering College - Namakkal</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.E - Civil Engineering</h3>
                            <span className="qualification__subtitle">Senguthar Engineering College - Namakkal</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">12th</h3>
                            <span className="qualification__subtitle">Saradha Vidhyalaya Metric.hr.sec.school - Tirupur</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2016
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Looking For Job And Doing Some Project</h3>
                            <span className="qualification__subtitle">-</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Present    
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
