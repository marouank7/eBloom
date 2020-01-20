import React from 'react';
// import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
import Smaily from './Components/employee_surveys/Smaily';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackOfficePage from './Components/admin_back-office/BackOfficePage';
import MyButton from "./Components/admin_back-office/MyButton";



function App() {


  return (

    <div className="App">
<<<<<<< HEAD
      
      <KickOffPage/>
=======
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
            path="/api/dailyquestion"
            render={props => (<Smaily/>) }
          />
          <Route
            exact
            path="/backOffice"
            render={props => (<BackOfficePage/>) }
          />

        </Switch>
      </Router>
>>>>>>> proto
    </div>

  );
  
}

export default App;


 
  {/* <MyButton/>    
  <KickOffPage/> c.1 
  <BackOfficePage/>  */}
       
