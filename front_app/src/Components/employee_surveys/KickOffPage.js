import React, {Component} from 'react' ;
import TexteDescriptif from'./TexteDescriptif.js';
import SurveyForm from './SurveyForm';
//style : 
import './styles/KickOffPage.css';


// adminSetNQPC() = adminSetNumberofQuestionPerCategory()

/** KickOffPage displays a kick-off survey for new employee . */

export default class KickOffPage extends Component {

    listOfCategories = ['Individual', 'Team','Company'];
    questionsSets = [ ["Profiter des tâches liées à mon travail.", "Développer mes compétences et mes connaissances.", "Attendre au travail"],
    ["Vive les travaux de groupe !", "La communication avec les collègues.", "Se sentir aidé au travail."],
    ["Déjeûner, est-ce important ?", "Évoluer au sein de l'entreprise.", "Plus de vacances SVP..."] ]

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