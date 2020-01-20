import React , {Component, useState} from 'react' ;
 import './styles/BackOfficePage.css';
 import SmartButton from "./SmartButton";

const MyButton = (props) => {

    // authorize to catch data from keyboard, onFocus
    const [getInput, setToGetInput] = useState(false);

    // input value before first Focusing
    const initMessage = "add a new question";
    const waitingText = ". . ." ;

    // catch event data from keyboard when authorized, onKeyUp
    const [inputdata, setInputdata] = useState(initMessage);

    // event data catcher function
    const takeInput = (event) => {

        // Code's runtime when authorized only !
        if ( getInput) {
            console.log(event.target.id, event.key);
            const position = event.target.id;

            // Change placeholder to return the pressed key only if its value is a glyph.
            if ( (inputdata === initMessage || inputdata === waitingText) && (event.key.length==1) ) {
                setInputdata(event.key);

            // Add new pressed key.
            } else if (event.key.length==1) {
                setInputdata(
                    inputdata.concat('', event.key)
                )
            // Manual data remover when Backspace keyboard is pressed.
            } else if (event.key ==="Backspace") {
                let newText = "" ;
                 inputdata.length == 1
                    ? newText = waitingText
                    : newText = inputdata.slice(0, inputdata.length-1);
                setInputdata(newText);  
            }
        }
    }
    
    return (
        <form style={{"display":props.visible, "width" : "600px"}}>

            <div className="back-off-question" tabindex="0" 
                id="0" onFocus={(e) => { setToGetInput(true); setInputdata(waitingText)} }
                onKeyUp ={(e) => takeInput(e)}
            >{inputdata}<SmartButton role="toRemove"  /></div>
            
        </form>
    )

}

export default MyButton ; 