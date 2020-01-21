import React , {useState, useEfect, useEffect} from 'react' ;
 import './styles/BackOfficePage.css';
 import SmartButton from "./SmartButton";



/** MyTextArea is hand made div box where the text (typed with keyboard) is display. There is a text control for validation. 
 *  <> You have to focus on the div box to allow the keys catching ;
 *  <> A button to control its states (from the parent when needed) can be added ; 
 *  <> goodToAdd function controls the text validation. By default, The text must have between 10 and 350 characters.*/



const MyTextArea = ({visible, isActive, process, button, num, liftIsValid, isAdded}) => {

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
            console.log(event.target.id, event.which);

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
    const goodToAdd = () => {
        if (inputData.length < 350 && inputData.length > 10 ) {
            return true ;
            // let anyWord = inputData.split(' ');
            // for (let word of anyWord) {
            //     let numberWithText = word.match(/\B/g);
            //     let textWithNumber = word.match(/\d+/g);
            //     console.log(numberWithText, textWithNumber);
            // }
            
            // matchAll(/\D/g);
            // console.log("sometext ", someText );
            // for (let word of someText) {
            //     console.log(word);
            //}
        } else {
            return false;
        }
    }

    // truncate data stored from inputs <> no use here . Check on button props.
    // const clearInput = event => {
    //     console.log("truncate my button")
    //     setInputData('');
    // }

//__Lyfe cycles___

//useEffect( ()=> alert(getInput) , [getInput]) // it buuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuugz

    
    return (
        <div style={{"display": visible, "width" : "600px"}}>

            <div className="back-off-question" id="0"
                tabIndex="0"  onFocus={(e) => { if(isActive) { setToGetInput(true); letMeAdd ? setInputData(waitingText) : console.log("happy") }} }
                onBlur={(e) => { if(isActive) {process(num, inputData, e)} } } /*setToGetInput(false);*/
                onKeyDown ={(e) => takeInput(e)}
            > 
                {inputData} {button}
            </div>
            
        </div>
    )

}

export default MyTextArea ; 