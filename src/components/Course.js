import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./styles/Course.css";

function Course(props) {
    const [seen, setSeen] = useState(props.seen);

    function handleClick() {
        setSeen(!seen);

    }

    return (
        <div className="Course">    
            <div className={"Course__icon " + (seen ? 'seen' : '')} onClick={() => handleClick()}>
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
                        <div className={"Pole " + (seen ? 'seen' : '')}/>
                    </>
                }
            </div>
            <div className="Course__name">Nome do Curso</div>
            
            <div className={"Course__time " + (seen ? 'seen' : '')}>01:55</div>
        </div>
    )
}

export default Course;