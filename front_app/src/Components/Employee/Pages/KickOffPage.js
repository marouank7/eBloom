import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import KickOffSurrvey from '../../Core/KickOff/KickOffSurvey'
import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import BoxQR from '../BoxQR';

import { withRouter } from 'react-router-dom'



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
        return(
          <DisplayEmployeeView {...this.props}>
            <div className="page-content">
                <KickOffSurrvey  {...this.props}/>
            </div>
          </DisplayEmployeeView>
        )
    }

}

export default withRouter(KickOffPage)
