import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';
import '../styles/DashboardPage.css';
import ProgressCircular  from '../ProgressCircular'
// import ProgressCircularIndividual from'../ProgressCircularIndividual'
// import ProgressCircularTeam from '../ProgressCircularTeam'
// import NavAdmin from './NavAdmin'
import DashboardGraph from '../DashboardGraph'
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
              <DashboardGraph/>
          </DisplayAdminView>
        )
    }
}

export default dashboardPage;
