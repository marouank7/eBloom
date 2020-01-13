import React, {Component} from 'react' ;
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm';
//style : 
import './styles/KickOffPage.css';


// adminSetNQPC() = adminSetNumberofQuestionPerCategory()

/** KickOffPage displays a kick-off survey for new employee . */

export default class KickOffPage extends Component {

    listOfCategories = ['Individual', 'Team','Company'];
    questionsSets = [ ["Est-ce réel?", "Vous sentez-vous en vie?", "La vie en couleurs ?"],
    ["Vive les travaux de groupe ?", "Le paradis, c'est les autres !", "Ma famille me manque..."],
    ["Déjeûner, est-ce important ?", "Merci patron !", "Plus de vacances SVP..."] ]

    adminSetNOQPC = () => {   // >> adminSetNumberofQuestionPerCategory()
        let secretNumber = 3;    // props.size will control how many questions are retrieved and displayed. Control may be set by admin back-office ...
        return secretNumber;
    }

    //Rendering_________

    render() {
        return(
            <div className="kickOffPage">
            <h1>Kick-off Survey</h1>
            <TexteDescriptif/>
            <SurveyForm categories={this.listOfCategories} massOfQuestions={this.adminSetNOQPC()} questionsSets={this.questionsSets} />
            </div>
        )
    }
    
}