import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';
import '../styles/DashboardPage.css';
import ProgressCircularCompany from '../ProgressCircularCompany'
import ProgressCircularIndividual from'../ProgressCircularIndividual'
import ProgressCircularTeam from '../ProgressCircularTeam'
// import NavAdmin from './NavAdmin'

import DisplayAdminView from "../Layouts/DisplayAdminView"

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
          <DisplayAdminView {...this.props}>




                <div className="diagramArea">
                    <div className="zone company">
                        <p>company</p>
                        <div className="logoCloudAndSun"></div>
                        <ProgressCircularCompany/>
                    </div>
                    <div className="zone team">
                        <p>team</p>
                        <div className="logoCloud"></div>
                        <ProgressCircularTeam/>
                    </div>
                    <div className="zone individual">
                        <p>individual</p>
                        <div className="logoSun"></div>
                        <ProgressCircularIndividual/>

                    </div>
                </div>

                <div className="circleHelp" onClick={this.handleClick}>
                    <div className={`helpBar ${this.state.showHelp ? '' : 'hide'}`}>
                    </div>
                </div>

          </DisplayAdminView>
        )
    }
}

export default dashboardPage;
