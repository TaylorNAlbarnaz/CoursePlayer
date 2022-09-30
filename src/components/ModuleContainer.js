import React from "react";
import "./styles/ModuleContainer.css";

function ModuleContainer(props) {
    return (
        <>
            <div className="Container">
                <h1>Módulos</h1>
                <div className="Modules">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ModuleContainer;