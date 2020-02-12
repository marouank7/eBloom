import React, {Component} from 'react' ;
import '../styles/KickOffPage.css';
//import TexteDescriptif from'../TexteDescriptif.js';
//import SurveyForm from '../SurveyForm';
//import CategoryBoxSurvey from '../CategoryBoxSurvey';
import BoxQR from '../BoxQR';

// in <h3></h3> :
       //  {this.props.kickOff.categories[catIndex]} << this line was breaking news just after merge : .categories is undefined & so it was responsible for the crumbling of Marouan before the demo show.
       //  {this.props.kickOff.categories[catIndex]} << this line is working as expected  !!!
       // conclusion : curse is a myth found out by lazy people... They deserve no mercy ^^ (MDR)

/** KickOffPage displays a kick-off survey for new employee . */

export default class KickOffPage extends Component {

    constructor(props) {
        super(props);

        this.newAnswer = { // Sample : just for inspiration, then delete it.
            survey_ID : -2,
            type: "kick-off",
            categorie: '',
            line_ID : -2,
            question: '',
            answer : -2,
            avatar_ID : 999,
        };
    }//___ constructor end ___


//__Class life cycles
    componentDidMount() {
       this.props. fetchKickOff(this.props.company); // <===================================================== data call from DB

    }
    componentDidUpdate() {

    }

//__On rendering
    render() {

        //
        return(
            <div className="kickOffPage" style={this.props.localStyleChanges}>
                     <h1>Kick-off Survey</h1>
                     <div className="texte-descriptif">
                        <p>What are your drivers?<br />
                        Give a score to the following drivers by Importance<br />
                        from a low loved of Importance to a </p>
                    </div>
                    {/* <SurveyForm categories={this.props.kickOff} /> */}
                    {this.props.kickOff.questions
                        ? <div className="SurveyForm" >
                            <form className="surveyForm"> {this.props.kickOff.categories[0]}
                                { this.props.kickOff.questions.map( (byCategory, catIndex) =>
                                    // <CategoryBoxSurvey key={catIndex} catIndex={catIndex} driverBox={driverBox} surveyID={this.props.kickOff.id}/>
                                    <div className="category-box-survey">
                                        <h3 className='catego-title'>{this.props.kickOff.categories[catIndex]}</h3>
                                        {byCategory.map((question, qIndex) =>
                                            <BoxQR key={qIndex} coordonates={[catIndex,qIndex]} question={question} editAnswer={this.props.editAnswer} surveyID={this.props.kickOff.id}/>
                                        )}
                                    </div>
                                    )
                                }
                                <button>Confirm</button>
                            </form>
                        </div>
                        : <div className="SurveyForm"><h1>Loading</h1></div>
                    }
            </div>
        )
    }

}
