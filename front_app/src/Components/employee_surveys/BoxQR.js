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
    }

   render() {

        const { data } = this.props;

        return(
            <div className="boxqr">
            <QuestionSurvey theQuestion={data.question}/>
            <Star forSubmission={this.changeScore}/>
            <NotImportant/>
            </div>
        )
    } 
}

export default BoxQR;