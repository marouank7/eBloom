import React from 'react';
// import { NavLink} from "react-router-dom";
import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import HomePage from './Components/employee_surveys/HomePage';
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
        </Switch>
      </Router>

    </div>
  );
  
}

export default App;
