import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import KickOffSurrvey from '../../Core/KickOff/KickOffSurvey'
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
            <div className="pageContainer">
                <KickOffSurrvey  {...this.props}/>
            </div>
        )
    }

}

export default withRouter(KickOffPage)
