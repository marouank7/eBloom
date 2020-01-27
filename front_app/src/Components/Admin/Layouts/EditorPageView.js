import React, { Component } from "react"
// import "./App.css"


const flex = {
  dipslay: "flex"
}

const leftHalf = {
  flex: 1,
  height: "100vh",
  alignItems: "center",
}

const rightHalf = {
  flex: 1,
  height: "100vh",
  alignItems: "center",

}

const EditorPageView = ({leftComponent: LeftComponent, rightComponent: RightComponent, ...rest }) => (
      <div style={{display: 'flex'}} className="editor-view">
          <div style={leftHalf} className="left-half">
            <LeftComponent {...rest}/>
          </div>
          <div style={rightHalf} className="right-half">
            <RightComponent {...rest}/>
          </div>
      </div>
)

export default EditorPageView;
