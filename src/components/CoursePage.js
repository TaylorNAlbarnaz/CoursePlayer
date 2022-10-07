import React from 'react';
import Course from './Course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./styles/CoursePage.css";
import CourseHolder from './CourseHolder';

function CoursePage() {
    return (
        <>
            <div className='Container_wrapper workspace'>
            <div className='Container__course'>
                <h1>Título do Modulo</h1>
                <section className='Container__play'>
                    <div className='Videoplayer'></div>
                    <div className='Videolist'>
                        <header className='Videolist__info'>
                            <div className='Videolist__icon'>
                                <div className='Videolist__icon__outer'>
                                    <div className='Videolist__icon__inner'>
                                        <FontAwesomeIcon className="Module__progress__icon" icon={faCheck}/>
                                    </div>
                                </div>
                            </div>
                            <div className='Videolist__coursedetails'>
                                <h2>Título extendido do Modulo</h2>
                                <div className='Videolist__timedetails'>
                                    <span>10 aulas </span>
                                    <FontAwesomeIcon icon={faCircle}/>
                                    <span> 24:02</span>
                                </div>
                            </div>
                        </header>
                        <section className='Videolist__list'>
                            <CourseHolder>
                                <Course seen/>
                                <Course seen selected pole/>
                                <Course pole/>
                                <Course pole/>
                            </CourseHolder>
                        </section>
                    </div>
                </section>
            </div>
            </div>
        </>
    )
}

export default CoursePage;