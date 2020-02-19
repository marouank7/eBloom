import React, { Component } from 'react' ;
// import '../styles/KickOffPage.css';

import Dashboard from '../../Core/Dashboard/DashboardGraph'
// import Welcome from '../../Core/KickOff/Welcome'

import DisplayManagerView from '../Layouts/DisplayManagerView'

import { withRouter, Link } from 'react-router-dom'


 class KickOffPage extends Component {

    constructor(props) {
        super(props);
        this.state = {company :""}
    }

    componentDidMount() {
        const { match, company } = this.props
        const name = match.params.company || company ; //<<<<<<<<< is there really company in props (should be) ??
        this.setState({company: name })
    }

    render() {
      const { match } = this.props
        return(
          <DisplayManagerView {...this.props}>
            <div className="page-content">
                // <Dashboard  {...this.props}/>
            </div>
          </DisplayManagerView>
        )
    }

}

export default withRouter(KickOffPage)
