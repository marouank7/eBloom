import React, { Component } from 'react';
import AddCompanyModal from '../ButtonModalAddCompany';
import AdminLoginHeader from '../Layouts/AdminLoginHeader';
import { makeStyles } from '@material-ui/core';
// import ''


// const useStyles = makeStyles({



// });




class AddCompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      //  this.props.newCompanySetter({dodo:"chapi"});
    }
    render() {
        return (
         
            <div className="pages-admin-login">
                <AdminLoginHeader/>
                <div className="component-login">
                    <AddCompanyModal {...this.props}/>
                </div>
            </div>

         );
    }
}

export default AddCompanyPage;
