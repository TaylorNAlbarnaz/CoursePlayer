import React from "react";
import "./styles/ModuleContainer.css";

function ModuleContainer(props) {
    return (
        <>
            <div className="Container__module workspace">
                <h1>Módulos</h1>
                <label htmlFor="arquivo" style={{color: "var(--colors-ltgray)"}}>Importar módulos</label>
                <input type="file" id="arquivo" style={{display: "none"}}/>
                <div className="Modules">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ModuleContainer;