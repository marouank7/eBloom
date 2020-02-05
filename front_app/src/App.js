import React from 'react';
import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/Employee/Pages/KickOffPage';
import HomePage from './Components/Manager/Pages/HomePage';
import DailySurvey from './Components/Employee/DailySurvey';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      ]
    };
  }

  setNewCompany = (dataSet) => {
    //event.preventDefault()
    console.log("setting a company")
    const listUp = [...this.state.companies, {...dataSet}];
    this.setState({companies : listUp });
  }

  componentDidUpdate() {
    console.log(this.state.companies, "The companies data.")
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
                render={props => (<KickOffPage/>) }
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
                render={props => (<AddCompanyPage {...props} companies={this.state.companies} setNewCompany={this.setNewCompany}/>) } //<<<<<<<<<<<<<<<<<<<  <<<<<<<<<<<<<< <<<<< <<<<< <<<< <<<< <<<<< <<<<<<<
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
