import React from 'react';
// import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
import Smaily from './Components/employee_surveys/Smaily';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
            path="/api/dailyquestion"
            render={props => (<Smaily/>) }
          />

        </Switch>
      </Router>

    </div>
  );
  
}

export default App;
