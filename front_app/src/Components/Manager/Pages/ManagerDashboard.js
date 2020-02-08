import React, { Component } from 'react';
import ProgressBar from '../../Core/Dashboard/ProgressCircular'

class ManagerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
<>

<h1>Dashboard</h1>

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
        </>
         );
    }
}

export default ManagerDashboard;
