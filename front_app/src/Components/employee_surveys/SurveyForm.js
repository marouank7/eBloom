import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

const SurveyForm = ({categories, massOfQuestions}) => {  // props.size will control how many questions are retrieved and displayed.

    const boxDisplayer = aList => {
       return aList.map( 
            (item, index) => ( <CategoryBoxSurvey category={[item, index]} length={massOfQuestions}/> )
        )
    }

    //RRRRRRRRRRRRRRRR___  Rendering  ___RRRRRRRRRRRRRRRRRRR
    return (
        <form className="surveyForm">
            {boxDisplayer(categories)}
    
            <button>Confirm</button>
        </form>
       )
    //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
} 


export default SurveyForm;