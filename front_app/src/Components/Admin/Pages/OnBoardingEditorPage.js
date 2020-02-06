import React, { Component } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import SurveyEditor from "../SurveyEditor"
import KickOffEditor from "../KickOffEditor"

// import SurveyForm from "../../Employee/SurveyForm"

// import SurveyScheduler from "../SurveyScheduler"

// import KickOffPage from "../../Employees/KickOffPage"
// import SurveyShow from "../../Employee/SurveyForm"

const OnBoardingEditorPage = (props) =>{
   // const ref = React.createRef();
    return (
        <DisplayAdminView {...props}>
              {/* <SurveyEditor  {...props}/> */}
              <KickOffEditor {...props}/>
        </DisplayAdminView>
    )
} 

export default OnBoardingEditorPage;
