import React from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';

const BoxQR = () => {
    return(
        <div className="boxqr">
           <QuestionSurvey/>
           <Star/>
           <NotImportant/>
        </div>
    )
}

export default BoxQR;