import React, { Component } from 'react';
import '../styles/DashboardPage.css';
import DashboardGraph from '../../Core/Dashboard/DashboardGraph'
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
        //
        //

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
