import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';
import '../styles/DashboardPage.css';
import ProgressBar from '../ProgressBar'
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
          <DisplayAdminView>
            <div className="dashboard">




                <div className="diagramArea">
                    <div className="zone company">
                        <p>company</p>
                        <div className="logoCloudAndSun"></div>
                        <ProgressBar/>
                    </div>
                    <div className="zone team">
                        <p>team</p>
                        <div className="logoCloud"></div>
                        <ProgressBar/>
                    </div>
                    <div className="zone individual">
                        <p>individual</p>
                        <div className="logoSun"></div>
                        <ProgressBar/>

                    </div>
                </div>

                <div className="circleHelp" onClick={this.handleClick}>
                    <div className={`helpBar ${this.state.showHelp ? '' : 'hide'}`}>
                    </div>
                </div>

            </div>
          </DisplayAdminView>
        )
    }
}

export default dashboardPage;
