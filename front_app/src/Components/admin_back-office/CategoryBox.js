import React, {Component, useState} from 'react' ;
import SmartButton from "./SmartButton";

//_____________________________

const CategoryHead = ({title}) => {
    return (
        <div className="category-head inBox-size">
            <div>{title}</div>
            <SmartButton role="toShow"/>
        </div>
    
    )
   
}

const BackOffQuestion = ({question, todo}) => {
    return (
        <div className="back-off-question inBox-size">
        <div>{question}</div>
        <SmartButton role="toRemove" doing={todo}/>
        </div>
    )
}
//____________________________



const CategoryBox = ({title, contentList, smartAct, stageHundred,}) => {

    const [listOpen, setListOpen] = useState(false);
    const togglelist = () => setListOpen(!listOpen) ;
    let listing = 0 ;
    const [toshow, setToShow] = useState("none");
    const isAdded = () => {
        console.log("dee")
        setToShow("inline");
    }

    return (
        <div className="category-box">
            <CategoryHead title={title} onClick={togglelist}/>
            {contentList.map( (request,index) => {
                listing = listing+1;
                return(<BackOffQuestion question ={request.content} clef={index+stageHundred}  todo={smartAct}/>)
                }   
            )}
            <input type="text" style={{"display": toshow}}/>
            <SmartButton role="toAdd" onClick={() => isAdded()}/>
        </div>
    )
}
export default CategoryBox ;

/**
 * title =      "individual";
 * contentList = 
                *   [
                        {
                            content : "Qui es la ? ",
                            answer : 2,
                            notImportante : false
                        },
                        {
                            content : "Quel est le ",
                            answer : 3,
                            notImportante : false
                        },
                        {
                            content : "Quel est le ",
                            answer : 2,
                            notImportante : false
                        }
                    ]
 */