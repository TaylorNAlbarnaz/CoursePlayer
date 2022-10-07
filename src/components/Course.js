import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./styles/Course.css";

function Course(props) {
    return (
        <div className="Course">    
            <div className={"Course__icon " + (props.seen ? 'seen' : '')}>
                {props.selected ? 
                    <div className="Course__select__outer">
                        <div className="Course__select__inner">
                            <FontAwesomeIcon icon={faCircle}/>
                        </div>
                    </div>
                :
                    <FontAwesomeIcon icon={faCircle}/>
                }
                {props.first ?
                null
                :
                    <>
                        <div className={"Pole " + (props.seen ? 'seen' : '')}/>
                    </>
                }
            </div>
            <div className="Course__name">Nome do Curso</div>
            
            <div className={"Course__time " + (props.seen ? 'seen' : '')}>01:55</div>
        </div>
    )
}

export default Course;