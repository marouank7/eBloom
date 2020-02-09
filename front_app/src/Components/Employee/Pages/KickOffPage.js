// import React, {Component} from 'react' ;
// import '../styles/KickOffPage.css';
// //import TexteDescriptif from'../TexteDescriptif.js';
// //import SurveyForm from '../SurveyForm';
// //import CategoryBoxSurvey from '../CategoryBoxSurvey';
// import BoxQR from '../BoxQR';
//
// // in <h3></h3> :
//        //  {this.props.kickOff.categories[catIndex]} << this line was breaking news just after merge : .categories is undefined & so it was responsible for the crumbling of Marouan before the demo show.
//        //  {this.props.kickOff.categories[catIndex]} << this line is working as expected  !!!
//        // conclusion : curse is a myth found out by lazy people... They deserve no mercy ^^ (MDR)
//
// /** KickOffPage displays a kick-off survey for new employee . */
//
// export default class KickOffPage extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.newAnswer = { // Sample : just for inspiration, then delete it.
//             survey_ID : -2,
//             type: "kick-off",
//             categorie: '',
//             line_ID : -2,
//             question: '',
//             answer : -2,
//             avatar_ID : 999,
//         };
//     }//___ constructor end ___
//
// //__ Actions
//
//
//     _QuestionInception = (crud, content, setEntrance, stepsWay) => { // crud means one of the 4 actions, content means the possible content to bring in,setEntrance as the upper layer name of the target set, stepsWay is the list (array) of doors (numbers) to open in order to reach the target.
//
//         const [aStageIndex, aLineIndex] = stepsWay ;
//
//                 // let categories = [...this.state.categories] ; // array of objects
//
//                 // const itsType = categories[aStageIndex].type ; // string
//                 // const oldQuestions = [...categories[aStageIndex].topics] // array of objects
//
//        // >>>>>>>>> >>>>>>>>>>>>>>>>>>>   to the parent function ::  let categories = [...this.state.categories] ; // array of objects
//
//         const itsType = setEntrance[aStageIndex].type ; // string
//         const oldQuestions = [...setEntrance[aStageIndex].topics] // array of objects
//
//         let updatedCateg = {} // To be populated on switch.
//         switch(crud) {
//
//             case "create" : // C
//                 const newQuestion = {
//                     question : content
//                 } ;
//                 // new lower body
//                 updatedCateg = {
//                     type : itsType,
//                     topics : [
//                             ...oldQuestions,
//                             newQuestion // updated content
//                             ]
//                 } ;
//             break ;
//             case "read" : // R
//
//                 if(aLineIndex) {
//                   return oldQuestions[aLineIndex]
//                 }  // before return : shall check lastSteps and go deeper on demand
//                 else  {
//                   return oldQuestion
//                 } ;
//             break;
//             case "update" : // U
//
//
//             // use to add content not to the target but inside the target !
//             break ;
//             case "delete" : // D
//                 // find the question to delete
//                 oldQuestions.splice(aLineIndex,1);
//
//                 // new lower body
//                 updatedCateg = {
//                     type : itsType,
//                     topics : [
//                                 ...oldQuestions, // updated content
//                             ]
//                 };
//             break ;
//             default :
//                 return true
//         }
//
//                 // upper body sliced around
//                 // const beforeIndex = [...categories.slice(0, aStageIndex)];
//                 // const afterIndex = [...categories.slice(aStageIndex+1, categories.length)];
//
//         const beforeIndex = [...setEntrance.slice(0, aStageIndex)];
//         const afterIndex = [...setEntrance.slice(aStageIndex+1, setEntrance.length)];
//
//         // new body building
//         let callBackCategs = [
//                                 ...beforeIndex,
//                                 updatedCateg, // updated object
//                                 ...afterIndex
//                             ] ;
//
//         return callBackCategs ;
//     }
//
//     deleteQuestion = (aStageIndex, aLineIndex, event ) => { // In this case, aStageIndex indicates which category has the question to delete , aLineIndex, which question of the list is the target.
//         event.preventDefault();
//         event.stopPropagation();
//
//         const stepsWay = [aStageIndex, aLineIndex] ; // target adress param restructuring for inception pattern.
//
//         const callBackCategs = this._QuestionInception ("delete", '_', stepsWay) ; //__QuestionInception()
//
//         this.setState({
//             //#parametrics for rendering
//             inputDisplay : -1 ,
//             mayLoad : {
//                 hasMount : false,
//                 hasWorked : true,
//             },
//             //#structural
//             questions : callBackCategs
//         })
//
//     }
//
//     createQuestion = (anIndex, content, event) => { // In this case, anIndex indicates which category is the target, content is what to add in this category.
//         event.preventDefault();
//         event.stopPropagation();
//
//         const stepsWay = [anIndex] ; // target adress param restructuring for for inception pattern.
//
//         const callBackCategs = this._QuestionInception ("create", content, stepsWay) ; //__QuestionInception()
//
//         this.setState({
//             //#parametrics for rendering
//             inputDisplay : -1 ,
//             mayLoad : {
//                 hasMount : false,
//                 hasWorked : true,
//             },
//             //#structural
//             questions : callBackCategs
//         })
//     }
//
// //__Class life cycles
//     componentDidMount() {
//        this.props.getKickOff(); // <===================================================== data call from DB
//
//     }
//     componentDidUpdate() {
//
//     }
//
// //__On rendering
//     render() {
//
//         //
//         return(
//             <div className="kickOffPage" style={this.props.localStyleChanges}>
//                      <h1>Kick-off Survey</h1>
//                      <div className="texte-descriptif">
//                         <p>What are your drivers?<br />
//                         Give a score to the following drivers by Importance<br />
//                         from a low loved of Importance to a </p>
//                     </div>
//                     {/* <SurveyForm categories={this.props.kickOff} /> */}
//                     {this.props.kickOff.questions
//                         ? <div className="SurveyForm" >
//                             <form className="surveyForm"> {this.props.kickOff.categories[0]}
//                                 { this.props.kickOff.questions.map( (byCategory, catIndex) =>
//                                     // <CategoryBoxSurvey key={catIndex} catIndex={catIndex} driverBox={driverBox} surveyID={this.props.kickOff.id}/>
//                                     <div className="category-box-survey">
//                                         <h3 className='catego-title'>{this.props.kickOff.categories[catIndex]}</h3>
//                                         {byCategory.map((question, qIndex) =>
//                                             <BoxQR key={qIndex} coordonates={[catIndex,qIndex]} question={question} editAnswer={this.props.editAnswer} surveyID={this.props.kickOff.id}/>
//                                         )}
//                                     </div>
//                                     )
//                                 }
//                                 <button>Confirm</button>
//                             </form>
//                         </div>
//                         : <div className="SurveyForm"><h1>Loading</h1></div>
//                     }
//             </div>
//         )
//     }
//
// }
