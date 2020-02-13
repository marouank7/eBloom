import React, {Component} from 'react' ;
import '../styles/KickOffPage.css';

import KickOffSurrvey from '../../Core/KickOff/KickOffSurvey'
import BoxQR from '../BoxQR';



export default class KickOffPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchKickOff("Proximus")

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
