import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

/* SurveyForm displays a list of questions per category .*/

const SurveyForm = ({ categories }) => {  // props.size will control how many questions are retrieved and displayed.
    console.log("hereeee", categories)
    // Rendering________________
    return (
        <form className="surveyForm">
            { categories.map( (category, index) => 
                <CategoryBoxSurvey key={index} category={category}/> )
            }
            <button>Confirm</button>
        </form>
    )} 


export default SurveyForm;