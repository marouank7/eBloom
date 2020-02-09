import React from 'react';
import './App.css';
import KickOffPage from './Components/Employee/Pages/KickOffPage';
import DailySurvey from './Components/Core/DailySurvey/DailySurvey';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import AdminLoginPage from './Components/Admin/Pages/AdminLoginPage'
import AddCompanyPage from './Components/Admin/Pages/AddCompanyPage'
import DashboardPage from './Components/Admin/Pages/DashboardPage';
import OnBoardingEditorPage from './Components/Admin/Pages/OnBoardingEditorPage'
import WeeklyEditorPage from './Components/Admin/Pages/WeeklyEditorPage'

import LoginManagerPage from './Components/Manager/Pages/LoginManagerPage'
import ManagerDashboard from './Components/Manager/Pages/ManagerDashboard'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.categories = ["Individual", "Team", "Company"]
    this.URLServer = 'http://localhost:3005'
    this.state = {
      companies : [],
      kickOffSurvey : {
        type : '',
        company : "",
        date: "2019-01-29",
        name: "Draft",
        categories : this.categories,
        questions:  this.categories.map(() => [])
      }
    };

  }

  setNewCompany = (dataSet) => {
    //event.preventDefault()

    const listUp = [...this.state.companies, {...dataSet}];
    this.setState({
      companies : listUp,
      kickOffSurvey: {  ...this.state.kickOffSurvey,
                        company: dataSet.name
                     }
    });
  }

  getKickOff = () => {
    axios.get(`${this.URLServer}/surveys/onboarding/${this.state.kickOffSurvey.company}`)
    .then((response) => {
        //handle successles

        this.setState({
            kickOffSurvey : {...response.data},
        })

    })
    .catch((error) => {
        // handle error

    })
    .finally(() => {
        // always executed
    })
  }
    // employee
  editAnswer = () => (coordonates, text, answer) => {
    const [category, question] = coordonates
    const { questions } = this.state.kickOffSurvey
    questions[category][question] = { text , answer }
    this.setState({ questions })
  }
    // admin
  addQuestion = category => {
    const { questions } = this.state.kickOffSurvey
    questions[category] = [...questions[category], { text: "" }]

    this.setState({ questions })
  }
  editQuestion = (category, question, text) => {
    const { questions } = this.state.kickOffSurvey
    questions[category][question] = { text }

    this.setState({ questions })
  }
  removeQuestion = (category, questionIndex) => {
    const { questions } = this.state.kickOffSurvey
    questions[category] = questions[category].filter(
      (el, index) => index !== questionIndex
    )

    this.setState({ questions })
  }

  submitSurveyConfig = (event, whichSurvey ) => {
    event.preventDefault() ;
    // let survey = "" ;
    // whichSurvey === "kick-off" ? survey = "kickOffSurvey" : survey = "dailySurvey" ;
    // // const { name, date, type, }
    // // const config = {
    // //
    // // }

    axios.post(`${this.URLServer}/surveys`, this.state.kickOffSurveys)
         .then((value) => {

          })

  }

  componentDidUpdate() {


    if(this.state.company) {
      this.getKickOff()
    }
  }

  componentDidMount() {
    if(this.state.company) {
      this.getKickOff()
    }
  }
  render() {
      return (

        <div className="App">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) }

                // render={props => ( <HomePage/> )}
              />
              <Route
                path="/employee/onboarding"
                render={props =>
                          (<KickOffPage
                              editAnswer={this.editAnswer}
                              getKickOff={this.getKickOff}
                              kickOff={this.state.kickOffSurvey}/>) }
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
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) }
              />
              <Route
                exact
                path="/admin/dashboard"
                render={props =>
                          (<DashboardPage  {...props}
                             companies={this.state.companies}
                             setNewCompany={this.setNewCompany}/>) }
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
                                      submitSurveyConfig={this.submitSurveyConfig} />) }
              />
              />
              <Route
                exact
                path="/admin/weekly-editor"
                render={props =>
                          (<WeeklyEditorPage {...props}
                              companies={this.state.companies}
                              setNewCompany={this.setNewCompany}/>) }
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
