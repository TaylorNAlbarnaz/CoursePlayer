import React from "react";
import "./styles/ModuleContainer.css";

function ModuleContainer(props) {
    return (
        <>
            <div className="Container">
                {props.children}
            </div>
        </>
    )
}

export default ModuleContainer;