import React, { Component } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import SurveyEditor from "../SurveyEditor"

// import SurveyForm from "../../Employee/SurveyForm"

// import SurveyScheduler from "../SurveyScheduler"

// import KickOffPage from "../../Employees/KickOffPage"
// import SurveyShow from "../../Employee/SurveyForm"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView {...props}>
          <SurveyEditor {...props}/>
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
