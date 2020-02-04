import React, { Component } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import SurveyEditor from "../SurveyEditor"

import SurveyForm from "../../employee_surveys/SurveyForm"

import SurveyScheduler from "../SurveyScheduler"

import KickOffPage from "../../employee_surveys/KickOffPage"

const OnBoardingEditorPage = (props) => (
    <DisplayAdminView {...props}>
          <SurveyEditor {...props}/>
    </DisplayAdminView>
)

export default OnBoardingEditorPage;
