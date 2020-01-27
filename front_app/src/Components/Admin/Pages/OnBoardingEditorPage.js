import React, { Component } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import SurveyEditor from "../SurveyEditor"

import SurveyShow from "../../employee_surveys/SurveyForm"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView>
        <EditorPageView
          leftComponent={SurveyEditor}
          rightComponent={SurveyShow}
          categories={[]}
          {...props}
        />
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
