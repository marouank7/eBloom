import React from 'react';
import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
import DailySurveyPage from './Components/employee_surveys/DailySurveyPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLoginPage from './Components/Admin/Pages/AdminLoginPage'
import AddCompanyPage from './Components/Admin/Pages/AddCompanyPage'
import DashboardPage from './Components/Admin/Pages/DashboardPage';
import OnBoardingEditorPage from './Components/Admin/Pages/OnBoardingEditorPage'
import WeeklyEditorPage from './Components/Admin/Pages/WeeklyEditorPage'

import LoginManagerPage from './Components/manager/LoginManagerPage'
import ManagerDashboard from './Components/manager/ManagerDashboard'
import DisplayAdminView from './Components/Admin/Layouts/DisplayAdminView'

function App() {

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
            render={props => (<DailySurveyPage/>) }
          />
          <Route
            exact
            path="/admin"
            render={props => (<AdminLoginPage/>) }
          />
          <Route
            exact
            path="/admin/addcompany"
            render={props => (<AddCompanyPage/>) }
          />
           <Route
            exact
            path="/admin/dashboard"
            render={props => (<DashboardPage/>) }
          />
          />
           <Route
            exact
            path="/admin/onboarding-editor"
            render={props => (<OnBoardingEditorPage/>) }
          />
           />
           <Route
            exact
            path="/admin/weekly-editor"
            render={props => (<WeeklyEditorPage/>) }
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

export default App;
