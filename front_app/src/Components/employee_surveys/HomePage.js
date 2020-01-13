import React from 'react';
import { NavLink} from "react-router-dom";
import './HomePage';
// style :
import './styles/HomePage.css';

function HomePage() {
  return (


    <div className="HomePage">
        
        <NavLink className="button" activeClassName="active" exact to="/survey"> Get started </NavLink>

    </div>
      
 

  );
}

export default HomePage;