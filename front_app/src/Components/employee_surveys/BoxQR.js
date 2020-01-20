import React from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';

/*BoxQR displays the question features and its sentence. */

class BoxQR  extends React.Component {
    constructor(props) {
        super(props)
        console.log('Dat for a box', props)
        this.state = {
            score : 0,
            important : true
        }
    }

    changeScore = (its) => {
        this.setState({score : its})
            console.log("you changed the score : " + this.state.score)
    }

    noScore = (event) => {
        this.setState({score : 0 })
    }

   render() {
    return(
        <div className="boxqr">
           <QuestionSurvey theQuestion={this.props.data.question}/> {/** >>>>>>>>>>>>> Sentence may be replaced in function of the JSON */}
           <Star forSubmission={this.changeScore}/>
           <NotImportant resetScore={this.noScore}/>
        </div>
    )
   }  
}

export default BoxQR;