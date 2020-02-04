import React from 'react';
import { NavLink} from "react-router-dom";
import './HomePage';
// style :
import './styles/HomePage.css';

function HomePage() {
  return (


    <div className="HomePage">

      <div className="buttonGetStarted">
        <NavLink className="button" activeClassName="active" exact to="/manager/dashboard"> Get started </NavLink>
      </div>
        
    </div>
      
  );
}

export default HomePage;