# react-ys-popup

This module allows you to easily create and customize pop-ups. 

- Create centered pop-up
- Free Popup Size Setting (wdith, height)
- Easy background click and esc click function setting

## Installation

Please install using npm :

    npm install react-ys-popup
    or
    yarn add react-ys-popup

## Setting

Use the following Prop.

- isOn: Pop-up activation;
- width: Pop-up width size
- height: Pop-up height size
- className (Optional) : Pop-up class name
- onClickBackground (Optional) : setting background and 'esc' click handler;
- backgroundAlpha (Optional) : background color alhpa
- left (Optional) : left margin if you don't want center alignment
- top (Optional): top margin if you don't want center alignment

## Example Code

### Basic example
    <Popup isOn={isPupupOn} width={128} height={128}>
        <div style={{ width: "100%", height: "100%", backgroundColor: "grey" }}> {Contents} </div>
    </Popup>

### Background Click example
    const [isPupupOn, onPopup] = useState(false) 

    return(
        <Popup isOn={isPupupOn} width={128} height={128} onClickBackground={()=>{onPopup(false)}}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "grey" }}> {Contents} </div>
        </Popup>
    )
