import React, { Component } from 'react';
import ProgressBar from '../../Core/Dashboard/ProgressCircular'
import DashboardGraph from '../../Core/Dashboard/DashboardGraph';
import DisplayManagerView from '../Layouts/DisplayManagerView'

class ManagerDashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
          <DisplayManagerView {...this.props}>
            <div className="dashboard">
                <DashboardGraph  {...this.props}/>
            </div>
          </DisplayManagerView>
        )
    }
}

export default ManagerDashboardPage;
