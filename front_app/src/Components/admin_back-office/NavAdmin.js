import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './styles/DashboardPage.css';

class NavAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="logoEbloomDashboard"></div>
                <div className="buttonDashboard">
                    <NavLink className="button1" exact to="/admin/dashboard"> dashboard </NavLink>
                </div>

                <div className="buttonBackOffice">
                    <NavLink className="button2"  to="/admin/onboarding-editor"> Onboarding Editor </NavLink>
                </div>

                <div className="weekly-editor">
                    <NavLink className="button3"  to="/admin/weekly-editor">Week Editor</NavLink>
                </div>
            </>
         );
    }
}
 
export default NavAdmin;