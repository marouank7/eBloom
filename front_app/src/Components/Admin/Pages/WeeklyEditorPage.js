import React, { Component } from 'react';

import EditorPageView from '../Layouts/EditorPageView'
import SurveyScheduler from "../SurveyScheduler"
import TodayQuestion from '../../Employee/AnswerSmileys'
import DisplayAdminView from "../Layouts/DisplayAdminView"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView>
        <EditorPageView
          leftComponent={SurveyScheduler}
          rightComponent={TodayQuestion}
          {...props}
        />
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
