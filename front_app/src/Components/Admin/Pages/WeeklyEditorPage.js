import React, { useEffect } from 'react';

import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"

import SurveyScheduler from "../../Core/DailySurvey/SurveyScheduler"
import DailySurvey from '../../Core/DailySurvey/DailySurvey';

const WeeklyEditorPage = (props) =>  {

  useEffect(() => {
    props.fetchDailySurvey()
  }, [props.fetchDailySurvey, props.id])
  return(
    <DisplayAdminView {...props}>
        <EditorPageView
          leftComponent={SurveyScheduler}
          rightComponent={DailySurvey}
          {...props}
        />
    </DisplayAdminView>
)}

export default WeeklyEditorPage;
