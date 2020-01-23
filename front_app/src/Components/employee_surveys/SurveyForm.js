import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

/* SurveyForm displays a list of questions per category .*/

const SurveyForm = ({ categories }) => {  // props.size will control how many questions are retrieved and displayed.
    console.log("je suis dans surveyFrom", categories.categories)

    const boxes = categories.questions;

    console.log(boxes)

    //const boxes = JSON.parse(survey.questions);

    // let parsedSurvey = {
    //     ...survey,
    //     questions: JSON.parse(survey.questions)
    // }
    // Rendering________________
    // TODO : FIX ASYNC
    if(boxes) {
        return (
            <form className="surveyForm">
                { boxes.map( (driverBox, stageIndex) => 
                    <CategoryBoxSurvey key={stageIndex} stageNum={stageIndex} driverBox={driverBox}/> )
                }
                <button>Confirm</button>
            </form>
        )
    } else {
        return ( <h1>Loading</h1>)
    }
}

export default SurveyForm;