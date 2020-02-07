import React  from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/ProgressBar.css';
import axios from 'axios';


class ProgressCircularTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            percentageQuestionDay : 10,
            percentageKickOffSurvey : 3
         }
        
    }

  componentWillMount(){
    this.fetchApi()
  }

    fetchApi = () => {
        axios.get(`http://localhost:3005/admin/dashboard`)
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
            <>
                    <CircularProgressbar
                        value={this.state.percentageQuestionDay} 
                        text={`${this.state.percentageKickOffSurvey}/5`}
                        className="progress-bar" 
                        styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',

                            // Text size
                            textSize: '16px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            backgroundColor: "#1fb59a",
                            textColor: "white",
                            pathColor: "#57e362",
                            trailColor: "black",
                            
                    })}
                    />

                    
                
                {/* <CircularProgressbar className="progress-bar" value={value} maxValue={1} text={`${value * 100}%`} /> */}
            </>
         );
    }
}
 
export default ProgressCircularTeam ;
