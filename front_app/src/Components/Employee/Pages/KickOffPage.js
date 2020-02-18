import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import Welcome from '../../Core/KickOff/Welcome'
import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import BottomAppBar from '../Layouts/BottomAppBar'

import BoxQR from '../BoxQR';

import { withRouter, Link } from 'react-router-dom'



 class KickOffPage extends Component {

    constructor(props) {
        super(props);
        this.state = {company :""}
        // props.setEmmployeeState()
    }

    componentDidMount() {
        const { match, company } = this.props
        const name = match.params.company || company ; //<<<<<<<<< is there really company in props (should be) ??
        this.setState({company: name })
        

    }
    // componentWillReceiveProps({company}) {
    //     // console.log("REREREREREndering ", day, date)
    //     fetchKickOff(company);
    //  }
    componentWillUpdate() {
        // const { fetchKickOff, match, company } = this.props
        // const name = match.params.company || company ; //<<<<<<<<< is there really company in props (should be) ??
        this.props.fetchKickOff(this.state.company) // !!!!!!!!!! Risk : infinate rendering !!!!!!!!!!!!!!!!
    }

    render() {
      const { match } = this.props
        return(
          <DisplayEmployeeView {...this.props}>
            <div className="page-content">
                <Welcome  {...this.props}/>
            </div>
            <BottomAppBar to={`/employee/onboarding/${match.params.company}`} component={Link}content='Get started'/>
          </DisplayEmployeeView>
        )
    }

}

// import React, {Component} from 'react' ;
// import '../styles/KickOffPage.css';
// //import TexteDescriptif from'../TexteDescriptif.js';
// //import SurveyForm from '../SurveyForm';
// //import CategoryBoxSurvey from '../CategoryBoxSurvey';
// import BoxQR from '../BoxQR';

// in <h3></h3> :
       //  {this.props.kickOff.categories[catIndex]} << this line was breaking news just after merge : .categories is undefined & so it was responsible for the crumbling of Marouan before the demo show.
       //  {this.props.kickOff.categories[catIndex]} << this line is working as expected  !!!
       // conclusion : curse is a myth found out by lazy people... They deserve no mercy ^^ (MDR)

/** KickOffPage displays a kick-off survey for new employee . */

// export default class KickOffPage extends Component {

//     constructor(props) {
//         super(props)
//         this.isFetch  = false ;
//     }

// //__Class life cycles
//     componentDidMount() {
//       // <===================================================== data call from DB
//        console.log("HHH", this.props.questions, this.props.company)
//     }
//     componentDidUpdate() {

//         if(!this.isFetch && !this.props.questions[0]) {
//             console.log("HHH", this.props.questions, this.props.company)
//             this.props.fetchKickOff(this.props.company);
//             this.isFetch = true ;
//         }
//         console.log("HHH", this.props.questions, this.props.fetchKickOff)
//     }

// //__On rendering
//     render() {

//         //
//         return( null
//             // <div className="kickOffPage" style={this.props.localStyleChanges}>
//             //          <h1>Kick-off Survey</h1>
//             //          <div className="texte-descriptif">
//             //             <p>What are your drivers?<br />
//             //             Give a score to the following drivers by Importance<br />
//             //             from a low loved of Importance to a </p>
//             //         </div>
//             //         {/* <SurveyForm categories={this.props.kickOff} /> */}
//             //         {this.props.kickOff.questions
//             //             ? <div className="SurveyForm" >
//             //                 <form className="surveyForm"> {this.props.kickOff.categories[0]}
//             //                     { this.props.questions.map( (byCategory, catIndex) =>
//             //                         // <CategoryBoxSurvey key={catIndex} catIndex={catIndex} driverBox={driverBox} surveyID={this.props.kickOff.id}/>
//             //                         <div className="category-box-survey">
//             //                             <h3 className='catego-title'>{this.props.kickOff.categories[catIndex]}</h3>
//             //                             {byCategory.map((question, qIndex) =>
//             //                                 <BoxQR key={qIndex} coordonates={[catIndex,qIndex]} question={question} editAnswer={this.props.editAnswer} surveyID={this.props.kickOff.id}/>
//             //                             )}
//             //                         </div>
//             //                         )
//             //                     }
//             //                     <button>Confirm</button>
//             //                 </form>
//             //             </div>
//             //             : <div className="SurveyForm"><h1>Loading</h1></div>
//             //         }
//             // //</div>
//        )
//     }

// }
export default withRouter(KickOffPage)
