import React , {Component, useState} from 'react' ;
 import './styles/BackOfficePage.css';

const MyButton = (props) => {

    const [getInput, setToGetInput] = useState(false);

    const initMessage = "add a new question";
    const waitingText = ". . ." ;
    const [inputdata, setInputdata] = useState(initMessage);

    const takeInput = (event) => {
        if ( getInput) {
            console.log(event.target.id, event.key);
            const position = event.target.id;

            if ( (inputdata === initMessage || inputdata === waitingText) && (event.key.length==1) ) {
                setInputdata(event.key);

            } else if (event.key.length==1) {
                setInputdata(
                    inputdata.concat('', event.key)
                )

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
        <form>
            <div className="back-off-question"> This is my exampple</div>
            <div className="back-off-question" tabindex="0" 
                id="0" onFocus={(e) => { setToGetInput(true); setInputdata(waitingText)} }
                onKeyUp={(e) => takeInput(e)}
            >{inputdata}</div>
        </form>
    )

}

export default MyButton ; 