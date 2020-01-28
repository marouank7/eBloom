import React, { Component } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import SurveyEditor from "../SurveyEditor"

import SurveyShow from "../../employee_surveys/SurveyForm"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView {...props}>
        <EditorPageView
          leftComponent={SurveyEditor}
          rightComponent={SurveyShow}
          categories={[]}
          //{...props} //conflict with upper spread
        />
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
