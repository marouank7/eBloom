import React, { Component } from 'react' ;
import '../styles/KickOffPage.css';

import Welcome from '../../Core/KickOff/Welcome'
// import Welcome from '../../Core/KickOff/Welcome'

import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import BottomAppBar from '../Layouts/BottomAppBar'

import BoxQR from '../BoxQR';

import { withRouter, Link } from 'react-router-dom'



 class KickOffPage extends Component {

    constructor(props) {
        super(props);
        this.state = {company :""}
        // props.setEmmployeeState()
    }

    componentDidMount() {
        const { match, company } = this.props
        const name = match.params.company || company ; //<<<<<<<<< is there really company in props (should be) ??
        this.setState({company: name })


    }
    // componentWillReceiveProps({company}) {
    //     // console.log("REREREREREndering ", day, date)
    //     fetchKickOff(company);
    //  }
    componentWillUpdate() {
        // const { fetchKickOff, match, company } = this.props
        // const name = match.params.company || company ; //<<<<<<<<< is there really company in props (should be) ??
        this.props.fetchKickOff(this.state.company) // !!!!!!!!!! Risk : infinate rendering !!!!!!!!!!!!!!!!
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
