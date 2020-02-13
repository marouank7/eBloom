import React from "react"


const leftHalf = {
  flex: 1,
  height: "100vh",
  alignItems: "center",
}

const rightHalf = {
  flex: 1,
  height: "100vh",
  alignItems: "center",
  textAlign: 'center'
}

const EditorPageView = ({leftComponent: LeftComponent, rightComponent: RightComponent, ...rest }) => { console.log( "Familia",{...rest});return(
      <div style={{display: 'flex'}} className="editor-view">
          <div style={leftHalf} className="left-half">
            <LeftComponent {...rest}/>
          </div>
          <div style={rightHalf} className="right-half">
            <RightComponent {...rest} dert="CI" localStyleChanges={{"background": "none"}}/>
          </div>
      </div>
)}

export default EditorPageView;
