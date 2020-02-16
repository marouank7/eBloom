import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import Welcome from '../../Core/KickOff/Welcome'
import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import BottomAppBar from '../Layouts/BottomAppBar'

import BoxQR from '../BoxQR';

import { withRouter, Link } from 'react-router-dom'



 class KickOffPage extends Component {

    constructor(props) {
        super(props);
        // props.setEmmployeeState()
    }

    componentDidMount() {
        const { fetchKickOff, match } = this.props
        fetchKickOff(match.params.company)

    }
    componentDidUpdate() {

    }

    render() {
      const { match } = this.props
        return(
          <DisplayEmployeeView {...this.props}>
            <div className="page-content">
                <Welcome  {...this.props}/>
            </div>
            <BottomAppBar to={`/employee/onboarding/${match.params.company}`} component={Link}content='Get started'/>
          </DisplayEmployeeView>
        )
    }

}

export default withRouter(KickOffPage)
