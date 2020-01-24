import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';
import './styles/DashboardPage.css';


class dashboardPage extends Component   {
    constructor(props) {
        super(props)
        this.state =  {
            showHelp : false
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        //console.log("hide")
        // console.log(value)

        this.setState(state => ({
            showHelp : !this.state.showHelp
        }));
    }





    render() {

        return(
            <div 

                className="dashboard">
                <div className="logoEbloomDashboard"></div>

                <div className="buttonDashboard">
                    <NavLink className="button1" activeClassName="active" exact to="/dashboard"> dashboard </NavLink>
                </div>

                <div className="buttonBackOffice">
                    <NavLink className="button2" activeClassName="active" exact to="/backOffice"> back office </NavLink>
                </div>

                <div className="diagramArea">
                    <div className="zone company">
                        <p>company</p>
                        <div className="logoCloudAndSun"></div>
                        <div className="circle1 "></div>
                    </div>
                    <div className="zone team">
                        <p>team</p>
                        <div className="logoCloud"></div>
                        <div className="circle2"></div>
                    </div>
                    <div className="zone individual">
                        <p>individual</p>
                        <div className="logoSun"></div>
                        <div className="circle3"></div>
                    </div>
                </div>
 
                <div className="circleHelp" onClick={this.handleClick}>
                    <div className={`helpBar ${this.state.showHelp ? '' : 'hide'}`}>                      
                    </div>
                </div>

            </div>


        )
    }
}

export default dashboardPage;