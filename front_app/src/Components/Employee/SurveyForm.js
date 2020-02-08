import React from 'react' ;
import CategoryBoxSurvey from './CategoryBoxSurvey';

/* SurveyForm displays a list of questions per category .*/

const SurveyForm = ({ categories, props }) => {  // props.size will control how many questions are retrieved and displayed.
    console.log("je suis dans surveyFrom", categories.categories)

    const boxes = categories.questions;
    const surveyID = categories.id ;

   

    //const boxes = JSON.parse(categories.questions);
    console.log(boxes);

    // let parsedSurvey = {
    //     ...survey,
    //     questions: JSON.parse(survey.questions)
    // }
    // Rendering________________
    // TODO : FIX ASYNC
    if(boxes) {
        return (
          <div className="SurveyForm" >
            <form className="surveyForm">
                { boxes.map( (driverBox, stageIndex) =>
                    <CategoryBoxSurvey key={stageIndex} stageNum={stageIndex} driverBox={driverBox} surveyID={surveyID}/> )
                }
                <button>Confirm</button>
            </form>
          </div>

        )
    } else {

        return (<div className="SurveyForm"><h1>Loading</h1></div>)

    }
}

export default SurveyForm;   
