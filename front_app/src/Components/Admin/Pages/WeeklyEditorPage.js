import React, { useState, useEffect } from 'react';

import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"

import SurveyScheduler from "../../Core/DailySurvey/SurveyScheduler"
import DailySurvey from '../../Core/DailySurvey/DailySurvey';

const WeeklyEditorPage = (props) =>  {

  const [day, setDay] = useState("Monday");

  useEffect(() => {

    props.fetchDailySurvey()

  }, [props.fetchDailySurvey, props.id] )
  return(
    <DisplayAdminView {...props}>
        <EditorPageView
          leftComponent={SurveyScheduler}
          rightComponent={DailySurvey}
          {...props} day={day} setDay={setDay}
        />
    </DisplayAdminView>
)}

export default WeeklyEditorPage;
