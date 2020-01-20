import React from 'react';
import './styles/QuestionSurvey.css';
const QuestionSurvey = ({theQuestion}) => {
            //console.log("the question:" + theQuestion)

    return(
        <>
            <p><b>{theQuestion}</b></p>
        </>
    )
}

export default QuestionSurvey;