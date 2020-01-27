import React, { Component } from 'react';
import AddCompanyModal from '../ButtonModalAddCompany';
import AdminLoginHeader from '../Layouts/AdminLoginHeader';


class AddCompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
         
            <div className="pages-admin-login">
                <AdminLoginHeader/>
                <div className="component-login">
                    <AddCompanyModal/>
                </div>
            </div>

         );
    }
}

export default AddCompanyPage;
