import React from "react";

function App(props) {
    return (
        <>
            <div className="Container">
            {props.children}
            </div>
        </>
    )
}

export default App;