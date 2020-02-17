import React, { Component } from 'react';
import ProgressBar from '../../Core/Dashboard/ProgressCircular'
import DashboardGraph from '../../Core/Dashboard/DashboardGraph';

class ManagerDashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 


            <div className="smailyPage employee">  

                 <DashboardGraph/>

            </div>
        );
    }
}

export default ManagerDashboardPage;
