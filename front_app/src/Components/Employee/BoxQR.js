import React, { Component } from 'react';
import './styles/BoxQR.css';
import QuestionSurvey from './QuestionSurvey';
import NotImportant from './NotImportant';
import Star from './Stars';
import axios from 'axios';

class BoxQR  extends Component {
    constructor(props) {
        super(props)
        this.size =  5 ; // could be set from a props number
        this.question = this.props.question ;
        this.coordonates = this.props.coordonates ;
        this.surveyID = this.props.surveyID ;
        this.state = {
            score : [-2,this.size],
        }
    }

    changeScore = (ratio) => {
        this.setState({score : ratio}, () => this.props.editAnswer(this.coordonates, this.question.text, ratio))
    }


    guessCategoryBox = () => {
        const categs = ['Individual', 'Team', 'Company'];
        return categs[this.coordonates[0]];
    }

    postAnswer = () => {
    const answerSet = {
        question : this.question.text,
        answer : this.state.score[0] > -2 ?  this.state.score[0] : -1 , // At the end, every questions shall be send at once, but non-answered become equals to not important.
        question_id : this.surveyID,
        category : this.guessCategoryBox() ,
        };

        axios.post("http://localhost:3005/feedbacks", answerSet)
        .then(res => {})
    }


    componentDidUpdate() {

        this.postAnswer() ;
    }



   render() {
    return(
        <div className="boxqr">
           <QuestionSurvey theQuestion={this.question.text}/>
           <Star forSubmission={this.changeScore} scoring={this.state.score} />
            <NotImportant dumpScore={this.changeScore} scoring={this.state.score}/>
        </div>
    )
   }
}

export default BoxQR;
