import React from "react";
import "./styles/CourseHolder.css";

function CourseHolder(props) {
    return (
        <div className="Holder">
            <div className="Pole"/>
            {props.children}
        </div>
    )
}

export default CourseHolder;