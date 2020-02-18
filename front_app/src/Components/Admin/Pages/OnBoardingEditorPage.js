import React, { useEffect } from 'react';
import EditorPageView from '../Layouts/EditorPageView'
import DisplayAdminView from "../Layouts/DisplayAdminView"
import KickOffEditor from "../../Core/KickOff/KickOffEditor"
import KickOffSurvey from "../../Core/KickOff/KickOffSurvey"

const OnBoardingEditorPage = (props) =>{
    useEffect(() => {
      props.fetchKickOff(props.company)
  }, [props.fetchKickOff, props.company, props.type])
    return (
      <DisplayAdminView {...props}>
          <EditorPageView
            leftComponent={KickOffEditor}
            rightComponent={KickOffSurvey}
            {...props}
          />
      </DisplayAdminView>
    )
}

export default OnBoardingEditorPage;
