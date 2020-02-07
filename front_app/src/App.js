import React from 'react';
import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/Employee/Pages/KickOffPage';
import HomePage from './Components/Manager/Pages/HomePage';
import DailySurvey from './Components/Employee/DailySurvey';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import AdminLoginPage from './Components/Admin/Pages/AdminLoginPage'
import AddCompanyPage from './Components/Admin/Pages/AddCompanyPage'
import DashboardPage from './Components/Admin/Pages/DashboardPage';
import OnBoardingEditorPage from './Components/Admin/Pages/OnBoardingEditorPage'
import WeeklyEditorPage from './Components/Admin/Pages/WeeklyEditorPage'

import LoginManagerPage from './Components/Manager/Pages/LoginManagerPage'
import ManagerDashboard from './Components/Manager/Pages/ManagerDashboard'
import DisplayAdminView from './Components/Admin/Layouts/DisplayAdminView'

class App extends React.Component {

  constructor(props) {
    super(props);
    const categories = ["Individual", "Team", "Company"]
    this.state = {

      companies : [
          {
            name : "to complete",
            administrator : "to set",
            logo : "to find"
          }
      ],

      // kickOffGET : {
      //           date: "2019-01-29",
      //           name: "Choose one",
      //           //type: 'onbaording',
      //           company : "Proximus",
      //           questions: []
      //       },

      kickOffSurvey : {
        company : "Proximus",
        date: "2019-01-29",
        name: "Choose one",
        categories : ["Team", "Professional", "Personal"],
        questions: [
          [ { text : "salut" } , { text : "bonnjour" } ],
          [ { text : "a demin" } , { text : "au revoir" } ],
          [ { text : "hey" } , { text : "nope" } ]
        ] // //categories.map(() => []),
        // categories
      }
    };

  }
  URLServer = 'http://localhost:3005' ;
  

  // companies data front management

  setNewCompany = (dataSet) => {
    //event.preventDefault()
    const listUp = [...this.state.companies, {dataSet}];
    this.setState({companies : listUp });
  }

 // kick-off surveys front management

 //Need to be change or new kick state =====<<<<<<
  getKickOff = () => {
    axios.get(`${this.URLServer}/surveys/onboarding/${this.state.kickOffSurvey.company}`)
    .then((response) => {
        //handle successles
        console.log("survey in state : " , response.data);
        this.setState({
            kickOffSurvey : {...response.data},
        })

    })
    .catch((error) => {
        // handle error
        console.log(error);
    })
    .finally(() => {
        // always executed
    })
  }

  editAnswer = () => (coordonates, text, answer) => {
    const [category, question] = coordonates
    const { questions } = this.state.kickOffSurvey
    questions[category][question] = { text , answer }
    this.setState({ questions }) //======================
  }
  postAnswer = () => { //==================================
    const answerSet = {
        question : this.question.text,
        answer : this.state.score[0] > -2 ?  this.state.score[0] : -1, // At the end, every questions shall be send at once, but non-answered become equals to not important.
        question_id : this.surveyID,
        category : this.guessCategoryBox(), 
        };

        axios.post(`${this.URLServer}/feedbacks`, answerSet)
        .then(res => console.log(res))
    }

  //======

  // Onboarding surveys front management

  addQuestion = category => {
    const { questions } = this.state.kickOffSurvey
    questions[category] = [...questions[category], { text: "" }]
    this.setState({ questions }) //====================
  }
  editQuestion = (category, question, text) => {
    const { questions } = this.state.kickOffSurvey
    questions[category][question] = { text }
    this.setState({ questions }) //====================
  }
  removeQuestion = (category, questionIndex) => {
    const { questions } = this.state.kickOffSurvey
    questions[category] = questions[category].filter(
      (el, index) => index !== questionIndex
    )
    this.setState({ questions }) //====================
  }
  submitSurveyConfig = (event, whichSurvey ) => {
    event.preventDefault() ;
    // const survey 
    // if (whichSurvey === "kick-off") survey = kickOffSurvey ;
    // //else survey = dailySurvey ; 
    // axios.post(`${this.URLServer}/surveys`, this.state.survey ).then((value) => {

    // })
    console.log(this.state);
  }
  //==========

  componentDidUpdate() {
    console.log(this.state.kickOffGET, "updated kick-off")
    console.log(this.state.companies, "Now Done : The companies data.")
  }
  render() {
      return (

        <div className="App">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => ( <HomePage/> )}
              />
              <Route
                path="/employee/onboarding"
                render={props => (<KickOffPage   editAnswer={this.editAnswer} getKickOff={this.getKickOff} kickOff={this.state.kickOffSurvey}/>) }
              />
              <Route
                exact
                path="/employee/today"
                render={props => (<DailySurvey/>) }
              />
              <Route
                exact
                path="/admin"
                render={props => (<AdminLoginPage {...props} />) }
              />
              <Route
                exact
                path="/admin/addcompany"
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) } //<<<<<<<<<<<<<<<<<<<  <<<<<<<<<<<<<< <<<<< <<<<< <<<< <<<< <<<<< <<<<<<<
              />
              <Route
                exact
                path="/admin/dashboard"
                render={props => (<DashboardPage  {...props} companies={this.state.companies} setNewCompany={this.setNewCompany}/>) }
              />
              />
              <Route
                exact
                path="/admin/onboarding-editor"
                render={props => (<OnBoardingEditorPage {...props} 
                                      companies={this.state.companies} 
                                      setNewCompany={this.setNewCompany} // for companyList on layout
                                      categories={this.state.kickOffSurvey.categories}
                                      questions={this.state.kickOffSurvey.questions}
                                      addQuestion={this.addQuestion}
                                      editQuestion={this.editQuestion}
                                      removeQuestion={this.removeQuestion}
                                      submitSurveyConfig={this.submitSurveyConfig} />) } //<<<<<<<<<<<<<<<<<<<<<<<<<<
              />
              />
              <Route
                exact
                path="/admin/weekly-editor"
                render={props => (<WeeklyEditorPage {...props} companies={this.state.companies} setNewCompany={this.setNewCompany}/>) }
              />
              <Route
                exact
                path="/manager/login"
                render={props => (<LoginManagerPage/>) }
              />
              <Route
                exact
                path="/manager/dashboard"
                render={props => (<ManagerDashboard/>) }
              />
            </Switch>
          </Router>
        </div>

      );
  }

}

export default App;
