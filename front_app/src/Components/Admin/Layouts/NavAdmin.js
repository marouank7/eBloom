import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import './NavAdmin.css';

class NavAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="NavAdmin divider">
                <div className="admin-nav-buttons">
                    <NavLink className="button" exact to="/admin/dashboard">Dashboard</NavLink>
                </div>

                <div className="admin-nav-buttons">
                    <NavLink className="button"  to="/admin/onboarding-editor">Onboarding Editor</NavLink>
                </div>

                <div className="admin-nav-buttons">
                    <NavLink className="button"  to="/admin/weekly-editor">Week Editor</NavLink>
                </div>
            </div>
         );
    }
}

export default NavAdmin;
