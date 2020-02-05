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
    this.state = {

      companies : [
          {
            name : "to complete",
            administrator : "to set",
            logo : "to find"
          }
      ],

      kickOffGET : {
                date: "2019-01-29",
                name: "Choose one",
                //type: 'onbaording',
                company : "Proximus",
                questions: []
            }
    };

  }

  // companies data front managment

  setNewCompany = (dataSet) => {
    //event.preventDefault()
    const listUp = [...this.state.companies, {dataSet}];
    this.setState({companies : listUp });
  }

 // kick-off surveys front managment

  getKickOff = () => {
    axios.get(`http://localhost:3005/surveys/onboarding/${this.state.kickOffGET.company}`)
    .then((response) => {
        //handle successles
        console.log("survey in state : " , response.data);
        this.setState({
            kickOffGET : {...response.data},
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

  //======

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
                render={props => (<KickOffPage getKickOff={this.getKickOff} kickOff={this.state.kickOffGET}/>) }
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
                render={props => (<OnBoardingEditorPage {...props} companies={this.state.companies} setNewCompany={this.setNewCompany}/>) } //<<<<<<<<<<<<<<<<<<<<<<<<<<
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
