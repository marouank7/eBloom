import React , {useState, useEfect, useEffect} from 'react' ;
 import '../../Admin/styles/BackOfficePage.css';
 import SmartButton from "./SmartButton";



/** MyTextArea is hand made div box where the text (typed with keyboard) is display. There is a text control for validation.
 *  <> You have to focus on the div box to allow the keys catching ;
 *  <> A button to control its states (from the parent when needed) can be added ;
 *  <> goodToAdd function controls the text validation. By default, The text must have between 10 and 350 characters.
 *  <> The rendering functionnality has to be activated with isActive :true -- this feature helps to prevent infinate update loops in case of nested rendering.*/



const MyTextArea = ({visible, isActive, process, button, stageNumber, liftIsValid, isAdded}) => {

// $ liftIsValid passes a function to lift valid data into the parent state  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $ isAdded return true when there is no input data waiting for validation. otherwise : false. $$$$$$$$$$$$$$$$


//__States & default data___

    // authorize to catch data from keyboard, onFocus
    const [getInput, setToGetInput] = useState(false);

    // input value before first Focusing
    const initMessage = "add a new question";
    const waitingText = ". . ." ;

    // catch event data from keyboard when authorized, onKeyUp
    const [inputData, setInputData] = useState(initMessage);

    let letMeAdd = isAdded ;

//__Actions___

    // event data catcher function
    const takeInput = event => {
        // Code's runtime when authorized only !
        if (getInput) {

            // Handles the spacebar side effects
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
            letMeAdd = false ;
        }
    }
// aer 345 ERT567 432DF
    // controls valid input
    const isValidInput = () => {
        if (inputData.length < 350 && inputData.length > 10 ) {
            return true ;
        } else {
            alert("unvalid input")
            return false;
        }
    }


    return (
        <div style={{"display": visible, "width" : "600px"}}>

            <div className="back-off-question" id="0" tabIndex="0"
                onFocus={(e) => { if(isActive) { setToGetInput(true); letMeAdd ? setInputData(waitingText) : return true }} }
                onBlur={ e => { if(isActive && isValidInput()) {process(stageNumber, inputData, e) ; setInputData(initMessage)} ; setToGetInput(false); } } /*setToGetInput(false);*/
                onKeyDown ={(e) => takeInput(e)}
            >
                {inputData} {button}
            </div>

        </div>
    )

}

export default MyTextArea ;
