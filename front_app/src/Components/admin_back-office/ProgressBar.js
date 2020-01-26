import React  from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/ProgressBar.css'


class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            percentageQuestionDay : 50,
            percentageKickOffSurvey : 70
         }
        
    }

    // customClassForPercentage =(percentageQuestionDay) => {
    //     if (this.state.percentageQuestionDay < 50) {
    //       return 'red';
    //     } else {
    //       return 'blue';
    //     }
    //   }

    render() { 
        return ( 
            <>
                    <CircularProgressbar
                        value={this.state.percentageKickOffSurvey} 
                        text={`salut${this.state.percentageKickOffSurvey}%`}
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
                            backgroundColor: "#3e98c7",
                            textColor: "red",
                            pathColor: "turquoise",
                            trailColor: "gold",
                            
                    })}
                    />
                
                {/* <CircularProgressbar className="progress-bar" value={value} maxValue={1} text={`${value * 100}%`} /> */}
            </>
         );
    }
}
 
export default ProgressBar ;

