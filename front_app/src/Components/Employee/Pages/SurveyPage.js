import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import KickOffSuvey from '../../Core/KickOff/KickOffSurvey'
import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import BottomAppBar from '../Layouts/BottomAppBar'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import BoxQR from '../BoxQR';

import { withRouter } from 'react-router-dom'

 class SurveyPage extends Component {

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
      const { match, history  } = this.props;
        return(
          <DisplayEmployeeView {...this.props}>
            <div className="page-content">
                <KickOffSuvey  {...this.props}/>
            </div>
            <BottomAppBar content={<button
              onClick={(event) => {
                this.props.submitEmployeeSurvey(event);
                history.push(`/employee/thankyou/${match.params.company}`)
              }
            }
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize:"large"
              }}
            >
              < CheckCircleOutlineIcon></CheckCircleOutlineIcon>
            </button>} />

          </DisplayEmployeeView>
        )
    }

}

export default withRouter(SurveyPage)
