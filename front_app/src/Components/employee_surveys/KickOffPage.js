import React, {Component} from 'react' ;
import SurveyForm from './SurveyForm';

export default class KickOffPage extends Component {
    render() {
        return(
            <>
            <h1>Kick-off Survey</h1>
            <p>Wilcome on this survey. Description oncoming later. <b>Survey</b> form gonna be displayunder here</p>
            <SurveyForm/>
            </>
        )
    }
}