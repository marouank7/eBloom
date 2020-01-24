import React , {Component} from 'react';
import BoxQR from './BoxQR';

/* CategoryBoxSurvey displays a precise mass of questions per category. */

const CategoryBoxSurvey = ({ driverBox, stageNum, surveyID }) => {  
    console.log("Driver Box:", driverBox)

   // const parsedBoxes = JSON.parse(driverBox.questions);
   // console.log("Parsed box of a survey", parsedBoxes)
    
    return (
        <div className="category-box-survey">
                <h3 className='catego-title'>{driverBox.type}</h3>

                {driverBox.topics.map((box, lineIndex) =>
                     <BoxQR key={lineIndex} coordonates={[stageNum,lineIndex]} data={box} surveyID={surveyID}/> 
                )}
        </div>
    )
    
}

export default CategoryBoxSurvey;