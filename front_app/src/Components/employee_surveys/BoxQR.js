import React from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';

/*BoxQR displays the question features and its sentence. */

class BoxQR  extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            score : 0,
            important : true
        }
    }

    changeScore = (its) => {
        this.setState({score : its})
            console.log("you changed the score : " *+ this.state.score)
    }

    noScore = (event) => {
        this.setState({score : 0 })
    }

        // console.log(sentence);

   //Rendering___________

   render() {
    return(
        <div className="boxqr">
           <QuestionSurvey theQuestion={this.props.sentence}/>
           <Star forSubmission={this.changeScore}/>
           <NotImportant resetScore={this.noScore}/>
        </div>
    )
   } 
}


// ({sentence}) => {
//     console.log(sentence)
//     return(
//         <div className="boxqr">
//            <QuestionSurvey theQuestion={sentence}/>
//            <Star forSubmission={changeScore}/>
//            <NotImportant/>
//         </div>
//     )
// }

export default BoxQR;