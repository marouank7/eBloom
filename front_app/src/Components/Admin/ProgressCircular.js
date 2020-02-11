import React  from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { FullscreenExit } from '@material-ui/icons';



class ProgressCircular extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { 
           
         }
         
    }


    componentDidMount(){
        this.props.fetchApiMoyenne(this.props.type)
    }

    // componentDidMount(){
    //     this.props.fetchApiMoyenne(this.props.type)
    // }
    SizeCircular = () =>{
        console.log("je rentre dans ma fonction SizeCircular",this.props.percentageKickOffSurvey)
        if(this.props.percentageKickOffSurvey >= 4){
            console.log("je suis dans la fonction SizeCircular 22222",this.props.percentageKickOffSurvey)
            return "Circular3"
        }
        if(this.props.percentageKickOffSurvey >= 3.5){
            return "Circular2"
        }
        if(this.props.percentageKickOffSurvey >= 3){
            return "Circular1"
        }
        console.log("J'ai raté tout les if")
    }






    render() { 
        const { pathColor, trailColor, strokeLinecap, percentageKickOffSurvey, percentageQuestionDay} = this.props
            console.log("now", percentageKickOffSurvey*50)



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
                            // textShadow: "2px 2px 20px black",
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







// ${<span>&#9734;</span>}

// {/* <div style={{height:"150px", width:"150px", backgroundColor:"#1fb59a", borderRadius:"50%"}}></div>
//                     <CircularProgressba
//                         value={this.state.percentageQuestionDay} 
//                         text={`${<span>&#9734;</span>} ${this.state.percentageKickOffSurvey}/5`}
//                         styles={buildStyles({
//                             // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//                             strokeLinecap: 'butt',

//                             // Text size
//                             textSize: '16px',

//                             // How long animation takes to go from one percentage to another, in seconds
//                             pathTransitionDuration: 0.5,

//                             // Can specify path transition in more detail, or remove it entirely
//                             // pathTransition: 'none',

//                             // Colors
//                             border: "black solid 2px",
//                             backgroundColor: "#1fb59a",
//                             textColor: "white",
//                             pathColor: "#57e362",
//                             trailColor: "grey",
                            
//                     })}
//                     /> */}