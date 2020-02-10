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

    this.categories = ["Individual", "Team", "Company"]
    this.URLServer = 'http://localhost:3005' ;
    this.state = {

      companies : [
          {
            // name : "to complete",
            // administrator : "to set",
            // logo : "to find"
          }
      ],
      kickOffSurvey : {
        type : 'onbaording',
        company : "Proximus",
        date: "2019-02-10",
        name: "Choose one",
        categories : this.categories,
        questions:  this.categories.map(() => [])
        
      }
    };

  }

//__ Ressource : daily survey 

  setNewCompany = (dataSet) => {
    //event.preventDefault()
    //console.log(dataSet, "in setNewCompany");
    axios.post(`${this.URLServer}/companies`, dataSet).then( res => {
      //console.log(" got post answer: ", res)
      if(res.status == 200) {
        const listUp = [...this.state.companies, {...dataSet}];
        this.setState({companies : listUp });
      }
    })
  }
  getAllCompanies = () => {
    axios.get(`${this.URLServer}/companies`)
    .then( res => 
      {console.log("LOAD LIST companies: ", res)
      this.setState({ companies : res.data})}
      )
  }

//__ Ressource : daily survey 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  

//__ Ressource : kick-off survey

    // employee || admin
  getKickOff = () => {
    axios.get(`${this.URLServer}/surveys/onboarding/${this.state.kickOffSurvey.company}`)
    .then(response => {
        //handle successles
       // console.log("survey in state : " , response.data);
       console.log("____GOT KICK-OFF____")
        this.setState({
            kickOffSurvey : {...response.data, categories : this.categories},
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

    // employee
  editAnswer = () => (coordonates, text, answer) => {
    const [category, question] = coordonates
    const { questions } = this.state.kickOffSurvey
    questions[category][question] = { text , answer }
    this.setState({ questions }) //======================
  }


    // admin
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
    let survey = "" ;
    whichSurvey === "kick-off" ? survey = "kickOffSurvey" : survey = "dailySurvey" ;
    //else survey = "dailySurvey" ; 
    axios.post(`${this.URLServer}/surveys`, this.state.survey ).then((value) => {

    })
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
                render={props => (<AddCompanyPage {...props} setNewCompany={this.setNewCompany}/>) } //<<<<<<<<<<<<<<<<<<<  <<<<<<<<<<<<<< <<<<< <<<<< <<<< <<<< <<<<< <<<<<<<
              />
              <Route
                exact
                path="/admin/dashboard"
                render={props => 
                          (<DashboardPage  {...props} 
                             getAllCompanies ={this.getAllCompanies}
                             companies={this.state.companies} 
                             setNewCompany={this.setNewCompany}/>) }
              />
              />
              <Route
                exact
                path="/admin/onboarding-editor"
                render={props => (<OnBoardingEditorPage {...props}
                                      getAllCompanies ={this.getAllCompanies}
                                      companies={this.state.companies} 
                                      setNewCompany={this.setNewCompany} // for companyList on layout
                                      categories={this.state.kickOffSurvey.categories}
                                      questions={this.state.kickOffSurvey.questions}
                                      getKickOff={this.getKickOff}
                                      addQuestion={this.addQuestion}
                                      editQuestion={this.editQuestion}
                                      removeQuestion={this.removeQuestion}
                                      submitSurveyConfig={this.submitSurveyConfig} />) } //<<<<<<<<<<<<<<<<<<<<<<<<<<
              />
              />
              <Route
                exact
                path="/admin/weekly-editor"
                render={props => 
                          (<WeeklyEditorPage {...props}
                              getAllCompanies ={this.getAllCompanies} 
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
