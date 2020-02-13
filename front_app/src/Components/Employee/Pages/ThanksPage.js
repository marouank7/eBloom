import React from 'react';

import '../../Core/DailySurvey/Smaily.css';


class DailySurvey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
 


  render() {
      const StyleParagraphThanks = {
        color: "white",
        fontSize: "50px",
        position:"absolute",
        left: "35%",
        top: "50%",
        width: "500",
        height: "500",
        marginLeft: "-250",
        marginTop: "-250"
      }
    return(
      <>
        <div className="smailyPage" style={this.props.localStyleChanges}>
          
          <h1 style={StyleParagraphThanks}>Thank you for your participation</h1>
        </div>
      </>
    )
  }

}

export default DailySurvey;