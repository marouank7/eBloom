import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

/* SurveyForm displays a list of questions per category .*/

const SurveyForm = ({ categories }) => {  // props.size will control how many questions are retrieved and displayed.
    console.log("here", categories)
    // Rendering________________
    return (
        <form className="surveyForm">
            { categories.map( (item, index) => 
                <CategoryBoxSurvey category={item}/> )
            }
            <button>Confirm</button>
        </form>
    )
} 


export default SurveyForm;