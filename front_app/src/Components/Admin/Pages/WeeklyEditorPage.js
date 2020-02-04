import React, { Component } from 'react';
import DailySurvey from '../../Employee/DailySurvey';
import EditorPageView from '../Layouts/EditorPageView'
import SurveyScheduler from "../SurveyScheduler"
import TodayQuestion from '../../Employee/AnswerSmileys'
import DisplayAdminView from "../Layouts/DisplayAdminView"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView {...props}>
        <EditorPageView
          leftComponent={SurveyScheduler}
          rightComponent={DailySurvey}
          {...props}
        />
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
