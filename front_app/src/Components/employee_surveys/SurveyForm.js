import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

/* SurveyForm displays a list of questions per category .*/

const SurveyForm = ({categories, massOfQuestions, questionsSets}) => {  // props.size will control how many questions are retrieved and displayed.
        //console.log(questionsSets);//////////////
    const boxDisplayer = aList => {
       return aList.map( 
            (item, index) => ( <CategoryBoxSurvey category={[item, index]} length={massOfQuestions} question={questionsSets[index]}/> )
        )
    }

    // Rendering________________

    return (
        <form className="surveyForm">
            {boxDisplayer(categories)}
    
            <button>Confirm</button>
        </form>
       )
} 


export default SurveyForm;