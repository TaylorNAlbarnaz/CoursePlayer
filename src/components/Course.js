import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./styles/Course.css";

function Course(props) {
    return (
        <div className="Course">
            {props.selected ?
                <>
                    <div className="Course__icon">
                        <div className="Course__select__outer">
                            <div className="Course__select__inner">
                                <FontAwesomeIcon icon={faCircle}/>
                            </div>
                        </div>
                    </div>
                    <div className="Course__name" style={{color: 'var(--colors-green'}}>Nome do Curso</div>
                </>
            :
                <>
                    <div className="Course__icon">
                                <FontAwesomeIcon icon={faCircle}/>
                    </div>
                    <div className="Course__name">Nome do Curso</div>
                </>
            }
            
            <div className="Course__time">01:55</div>
        </div>
    )
}

export default Course;