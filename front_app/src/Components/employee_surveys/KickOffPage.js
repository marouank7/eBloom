import React, {Component} from 'react' ;
import SurveyForm from './SurveyForm';


// adminSetNQPC() = adminSetNumberofQuestionPerCategory()

export default class KickOffPage extends Component {

    listOfCategories = ['individual', 'team', 'structure'];

    adminSetNQPC = () => {   // >> adminSetNQPC() = adminSetNumberofQuestionPerCategory()
        let secretNumber = 3;    // props.size will control how many questions are retrieved and displayed. Control may be set by admin back-office ...
        return secretNumber;
    }

    //RRRRRRRRRRRRRRRR___  Rendering  ___RRRRRRRRRRRRRRRRRRR
    render() {
        return(
            <>
            <h1>Kick-off Survey</h1>
            <p>Wilcome on this survey. Description oncoming later. <b>Survey</b> form gonna be displayunder here</p>
            <SurveyForm categories={this.listOfCategories} size={this.adminSetNQPC()} />
            </>
        )
    }
    //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
}