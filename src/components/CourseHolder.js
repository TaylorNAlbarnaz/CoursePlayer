import React from "react";
import "./styles/CourseHolder.css";

function CourseHolder(props) {
    return (
        <div className="Holder">
            {props.children}
        </div>
    )
}

export default CourseHolder;