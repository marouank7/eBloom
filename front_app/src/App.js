import React from 'react';
import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
import Smaily from './Components/employee_surveys/Smaily';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from './Components/admin_back-office/DashboardPage';
import AdminLoginPage from './Components/admin_back-office/AdminLoginPage'
import AddCompanyPage from './Components/admin_back-office/AddCompanyPage'
import OnBoardingEditorPage from './Components/admin_back-office/OnBoardingEditorPage'
import WeeklyEditorPage from './Components/admin_back-office/WeeklyEditorPage'
import LoginManagerPage from './Components/manager/LoginManagerPage'
import ManagerDashboard from './Components/manager/ManagerDashboard'

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
            render={props => (<Smaily/>) }
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
        {/* <MyButton/> */}
      </Router>
    </div>

  );
  
}

export default App;


 
  {/* <MyButton/>    
  <KickOffPage/> c.1 
  <BackOfficePage/>  */}
       
