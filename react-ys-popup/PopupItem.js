import * as React from "react";

// PopupProps = {
//     isOn: boolean;
//     className?: string;
//     width: number;
//     height: number;
//     onClickBackground?: Function;
//     backgroundAlpha?: boolean;
//     left?: number;
//     top?: number;
// };

export const Popup = (props) => {
    let isClicked = false;
    let isPressed = false;

    document.onkeydown = function (e) {
        if (e.key === "Escape" && props.onClickBackground !== undefined) {
            props.onClickBackground();
        }
    };

    let alpha = props.backgroundAlpha ? 0 : 0.8;
    let left = props.left != undefined ? props.left + "px" : 0;
    let top = props.top != undefined ? props.top + "px" : 0;
    let margin = props.left == undefined && props.top == undefined ? "auto": "0"

    return props.isOn ? (
        <div
            tabIndex={0}
            onMouseDown={() => (isClicked = true)}
            onMouseUp={() => {
                if (isClicked == true) {
                    isClicked = false;
                    props.onClickBackground ? props.onClickBackground() : null;
                }
            }}
            className={props.className}
            style={{ zIndex: 3, position: "fixed", left: 0, top: 0, height: "100vh", width: "100vw", backgroundColor: "rgba(25, 26, 30, " + alpha + ")" }}
        >
            <div
                onMouseDown={(event) => {
                    event.stopPropagation();
                }}
                onMouseUp={(event) => {
                    event.stopPropagation();
                    isClicked = false;
                }}
                style={{ position: "fixed", width: props.width, height: props.height, left: left, top: top, right: 0, bottom: 0, margin: margin}}
            >
                {props.children}
            </div>
        </div>
    ) : null;
};