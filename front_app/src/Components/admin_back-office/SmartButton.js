import React, {Component, useState} from 'react' ;
const SmartButton = ({role, process, num}) => {

    const styles = {
        toShow: "question-show-button hover",
        toAdd: "question-add-button hover",
        toRemove: "question-remove-button hover",
        isValid : "question-checking-button hover"
    }
    const symbols = {
        toShow: "[T]",
        toAdd: "+",
        toRemove: <>&#x2297;</>,
        isValid : <>&#x221A;</>//<img src="./styles/symbols/validator.png" alt="V"/>
    }
    const act = {
        toShow: ()=> console.log("set button to show questions"),
        toAdd: ()=> console.log("set button to add a question"),
        toRemove: ()=> console.log("set button to remove a question"),
        isValid : ()=> console.log("set button to know the validation state of new question")
    }

    return (
    <div className={styles[role]} onClick={(event)=>process(event)} key={num}>
       <div className="abstract-it">{symbols[role]}</div> 
    </div>
    )
}

export default SmartButton ;