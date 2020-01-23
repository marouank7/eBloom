import React, {useState, useEffect} from 'react';


const NotImportant = ({ dumpScore, scoring}) => {
console.log("re-render: ", scoring);
//__Building state
    let points , range ;
    [points , range] = scoring ;
    const [score, setScore] = useState([11, range]) ;
   // setScore(scoring);
    console.log("re-render after hook: ", score);

    //let afterClick = false ;

//__Actions 
    const isGoodToDump = value => value !== -1 ? true : false ;

    const setScoreOnEvent = () => {
        //afterClick = true ;
        if( isGoodToDump(score[0]) ) setScore([-1, range]);
        else setScore([0, range]);
    }

//__Life cycle
    useEffect( () =>  { /*if (afterClick)*/ {dumpScore(score) ; /*afterClick = false */} } ) // dumpScore on click

//__On rendering
    return(

        <div className= { score[0] === -1 ? "not-important bold" : "not-important"} onClick={setScoreOnEvent}> 
            <span className="checker" style={{display: score[0] === -1 ? "none" : "inline-block"}}>&#x2609;</span>
            <span className="checker" style={{display: score[0] !== -1 ? "none" : "inline-block"}}>&#x2611;</span>
            Not Important {score[0]}
        </div>
    )
    
}

export default NotImportant;

