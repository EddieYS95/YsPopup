import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";
import { Popup } from "../react-ys-popup";

const Root = () => {

    const [isPupupOn, onPopup] = useState(false) 

    return (
        <>
            <button onClick={()=>onPopup(!isPupupOn)}>
                On Pupup
            </button>
            
            <Popup onClickBackground={()=>{onPopup(false)}} isOn={isPupupOn} width={128} height={128}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "grey" }}>PopUp Test</div>
            </Popup>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
