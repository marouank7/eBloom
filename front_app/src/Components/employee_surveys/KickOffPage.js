import React, {Component} from 'react' ;
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm';
//style : 
import './styles/KickOffPage.css';


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
            <div className="kickOffPage">
            <h1>Kick-off Survey</h1>
            <TexteDescriptif/>
            <SurveyForm categories={this.listOfCategories} size={this.adminSetNQPC()} />
            </div>
        )
    }
    //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
}