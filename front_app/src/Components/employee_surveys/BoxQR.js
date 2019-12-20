import React from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';

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
    }

   // console.log(sentence);
   render() {
    return(
        <div className="boxqr">
           <QuestionSurvey theQuestion={this.props.sentence}/>
           <Star forSubmission={this.changeScore}/>
           <NotImportant/>
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