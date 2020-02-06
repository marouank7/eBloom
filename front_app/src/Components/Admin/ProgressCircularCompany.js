import React  from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/ProgressBar.css';
import axios from 'axios';
import { FullscreenExit } from '@material-ui/icons';



class ProgressCircularCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            percentageQuestionDay : 90,
            percentageKickOffSurvey : 4
         }
        
    }

  componentWillMount(){
    this.fetchApi()
  }

    fetchApi = () => {
        axios.get(`http://localhost:3005/dashboard`)
        .then((response) => {
            console.log("je suis dans ma route dashboard fetchApi",response)

            console.log("Reponse data ", response);

            console.log("survey in state : " , response.data);
            this.setState({
                surveyGET : {...response.data},
            })

        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        })
    }

    render() { 
        return ( 
            <div style={{height:"200px", width:"200px", marginLeft:"25%"}}>

               
                     
                        <CircularProgressbarWithChildren 
                        value={this.state.percentageQuestionDay} 
                        
                        // className="progress-bar"
                        strokeWidth={3}
                        style={{height:"200px", width:"200px"}}
                        style={buildStyles({
                            textSize:"16px",
                            textColor: "red",
                            pathColor: "turquoise",
                            trailColor: "red"
                            
                        })}
                        >
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <div style={{ 
                            display: "flex",

                            height:"150px", 
                            width:"150px", 
                            backgroundColor:"#1fb59a", 
                            borderRadius:"50%", 
                            marginTop: -5, 
                            textAlign:"center",
                            verticalAlign:"middle",
                            justifyContent: "center"
 
                            }}>
                               <span style={{alignSelf: "center", color:"white", fontSize:"30px"}}> &#9733; {`${this.state.percentageKickOffSurvey}/5`}</span>
                        </div>
                        
                        </CircularProgressbarWithChildren>
                        <p>{`${this.state.percentageQuestionDay} %`}</p>
                    
                
                
            </div>
         );
    }
}
 
export default ProgressCircularCompany ;







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