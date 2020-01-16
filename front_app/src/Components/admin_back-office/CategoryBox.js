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

    return (
        <div className="category-box">
            <CategoryHead title={title} onClick={togglelist}/>
            {contentList.map( (request,index) => 
                <BackOffQuestion question ={request.content} clef={index+stageHundred}  todo={smartAct}/>
            )}
            
            <SmartButton role="toAdd" onFocus={() => smartAct(1, 1)}/>
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