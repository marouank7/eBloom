import React , {Component, useState} from 'react' ;
 import './styles/BackOfficePage.css';
 import SmartButton from "./SmartButton";

const MyTextArea = ({visible, button}) => {

    // authorize to catch data from keyboard, onFocus
    const [getInput, setToGetInput] = useState(false);

    // input value before first Focusing
    const initMessage = "add a new question";
    const waitingText = ". . ." ;

    // catch event data from keyboard when authorized, onKeyUp
    const [inputData, setInputData] = useState(initMessage);

    // event data catcher function
    const takeInput = event => {
        // Code's runtime when authorized only !
        if ( getInput) {
            console.log(event.target.id, event.which);

            const ecode = event.keyCode || event.which ;
            if(ecode == 32 && event.stopPropagation) {
                event.stopPropagation() ;
                event.preventDefault();
            }

            const position = event.target.id;

            // Change placeholder to return the pressed key only if its value is a glyph.
            if ( (inputData === initMessage || inputData === waitingText) && (event.key.length==1) ) {
                setInputData(event.key);

            // Add new pressed key.
            } else if (event.key.length==1) {
                setInputData(
                    inputData.concat('', event.key)
                )
            // Manual data remover when Backspace keyboard is pressed.
            } else if (event.key ==="Backspace") {
                let newText = "" ;
                 inputData.length == 1
                    ? newText = waitingText
                    : newText = inputData.slice(0, inputData.length-1);
                setInputData(newText);  
            }
        }
    }

    // truncate data stored from inputs
    const clearInput = event => {
        console.log("truncate my button")
        setInputData('');
    }
    
    return (
        <div style={{"display": visible, "width" : "600px"}}>

            <div className="back-off-question" tabindex="0" 
                id="0" onFocus={(e) => { setToGetInput(true); setInputData(waitingText)} }
                onKeyDown ={(e) => takeInput(e)}
            > 
                {inputData} {button}
            </div>
            
        </div>
    )

}

export default MyTextArea ; 