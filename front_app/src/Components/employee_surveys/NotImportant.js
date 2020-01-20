import React, {useState} from 'react';
const NotImportant = ({resetScore}) => {

    let isVisible = [ "none", "inline-block"]
    let uncheck = isVisible[1];
    let checked = isVisible[0];
    let checking = false ;

    const [checker, setCheck] = useState([uncheck,checked, checking]);
        
    const toggleCheck = (event) => {
        console.log("toggling importance")
       
        if (checker[2]) {
             uncheck = isVisible[1];
             checked = isVisible[0];
            checking = false;
            console.log(checking)
        } else {
            uncheck = isVisible[0];
            checked = isVisible[1];
            checking = true;
        }
        console.log([uncheck,checked], checking);
        setCheck([uncheck,checked, checking]);
        
    }
    
    return(

    <div className= {checker[2] ? "not-important bold" : "not-important"} onClick={toggleCheck}>
        <span className="checker" style={{display: checker[0]}}>&#x2609;</span>
        <span className="checker" style={{display: checker[1]}}>&#x2611;</span>
        Not Important
    </div>
    )
}

export default NotImportant;

//<input type="checkbox" value="Not Important"/><div style={{"marginLeft" : "10px"}}>Not important</div>