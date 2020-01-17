import React from 'react';
import './styles/QuestionSurvey.css';
const QuestionSurvey = ({theQuestion}) => {
    console.log("je suis dans questionSurvey et je console.log the question:", theQuestion.content)

    return(
        <>
            <p><b>{theQuestion}</b></p>
        </>
    )
}

export default QuestionSurvey;