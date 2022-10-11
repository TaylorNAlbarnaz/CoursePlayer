import React, { useState } from "react";
import "./styles/ModuleContainer.css";
import "../styles/index.css";

function ModuleContainer(props) {
    const [file, setFile] = useState(null);

    return (
        <>
            <div className="Container__module workspace">
                <h1>Módulos</h1>
                <label 
                    htmlFor="arquivo" 
                    style={
                        file ?
                        {color: "var(--colors-green)"}
                        :
                        {color: "var(--colors-ltgray)"}
                    }
                >Importar módulos</label>
                <input type="file" id="arquivo" style={{display: "none"}} onChange={(e)=> {setFile(e.target.files[0])}}/>
                <div className="Modules">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ModuleContainer;