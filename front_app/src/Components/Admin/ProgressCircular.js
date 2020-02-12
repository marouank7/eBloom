import React  from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { FullscreenExit } from '@material-ui/icons';



class ProgressCircular extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
         
    }


    componentDidMount(){
        this.props.fetchApiMoyenne(this.props.type)
        this.props.UpdateLogo(this.props.type)
    }

    // componentDidMount(){
    //     this.props.fetchApiMoyenne(this.props.type)
    // }
  

    render() { 
        const { pathColor, trailColor, strokeLinecap, percentageKickOffSurvey, percentageQuestionDay} = this.props
           
          const SizeExt = `${percentageKickOffSurvey * 55}px`;
          const SizeInt = `${percentageKickOffSurvey * 40}px`;

          return(  
               
                 <div style={{maxHeight:"300px",maxWidth:"300px",minHeight:"170px", minWidth:"170px",height:SizeExt, width:SizeExt}}> 
                     
                        <CircularProgressbarWithChildren 
                            value={percentageQuestionDay}
                            // className="progress-bar"
                            strokeWidth={3}
                            styles={buildStyles({
                                pathColor,
                                trailColor,
                                strokeLinecap
                              })}
                        >
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <div style={{ 
                            display: "flex",
                            maxHeight:"200px",maxWidth:"200px",minHeight:"130px", minWidth:"130px",height:SizeInt, width:SizeInt,
                            backgroundColor:"#1fb59a", 
                            borderRadius:"50%",
                            boxShadow : "2px 2px 30px black", 
                            strokeLinecap: "butt",
                            marginTop: -5, 
                            textAlign:"center",
                            verticalAlign:"middle",
                            justifyContent: "center"
 
                            }}>
                               <span style={{alignSelf: "center", color:"white", fontSize:"30px"}}> &#9733; {`${percentageKickOffSurvey}/5`}</span>
                        </div>
                        
                        </CircularProgressbarWithChildren>
                        <p>{`${percentageQuestionDay} %`}</p>

                    
                
                
            </div>
         );
    }
}
 
export default ProgressCircular ;







