import React, { Component } from 'react';

import EditorPageView from '../Layouts/EditorPageView'
import SurveyScheduler from "../SurveyScheduler"
import TodayQuestion from "../../employee_surveys/AnswerSmileys"
import DisplayAdminView from "../Layouts/DisplayAdminView"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView {...props}>
        <EditorPageView
          leftComponent={SurveyScheduler}
          rightComponent={TodayQuestion}
          {...props}
        />
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
