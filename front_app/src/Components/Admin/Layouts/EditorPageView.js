import React from "react"


const leftHalf = {
  flex: 2,
  alignItems: "center",
  height: '100vh',
  overflow: 'auto',
  justifyContent:'center'
}

const rightHalf = {
  opacity: 0.7,
  flex: 1,
  marginTop: '18px',
  alignItems: "center",
  textAlign: 'center',
  height: '100vh',
  overflow: 'auto',
}

const EditorPageView = ({leftComponent: LeftComponent, rightComponent: RightComponent, ...rest }) => { return(
      <div style={{display: 'flex', width: "100vw"}} className="editor-view">
          <div style={leftHalf} className="left-half">
            <LeftComponent {...rest}/>
          </div>
          <div style={rightHalf} className="right-half">
            <RightComponent {...rest} dert="CI" localStyleChanges={{"background": "none"}}/>
          </div>
      </div>
)}

export default EditorPageView;
