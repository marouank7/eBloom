import React from 'react';
import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
import Smaily from './Components/employee_surveys/Smaily';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackOfficePage from './Components/admin_back-office/BackOfficePage';
import InputDashboard from './Components/Dashboard/Navbar';
import DashboardPage from './Components/admin_back-office/DashboardPage';
import AdminLoginPage from './Components/admin_back-office/AdminLoginPage'
import AddCompanyPage from './Components/admin_back-office/AddCompanyPage'
import OnBoardEditorPage from './Components/admin_back-office/OnBoardEditorPage'
import WeekyEditor from './Components/admin_back-office/WeekyEditor'
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
            path="/survey"
            render={props => (<KickOffPage/>) }
          />
          <Route
            exact
            path="/questionOfDay"
            render={props => (<Smaily/>) }
          />
          <Route
            exact
            path="/backOffice"
            render={props => (<BackOfficePage/>) }
          />
          <Route
            exact
            path="/test"
            render={props => (<InputDashboard/>) }
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
            path="/admin/onboarding-EDITOR"
            render={props => (<OnBoardEditorPage/>) }
          />
           />
           <Route
            exact
            path="/admin/weeky-EDITOR"
            render={props => (<WeekyEditor/>) }
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
       
