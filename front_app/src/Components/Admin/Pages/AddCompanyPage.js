import React, { Component } from 'react';
import AddCompanyModal from '../ButtonModalAddCompany';

class AddCompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="pages-admin-login">
                <AddCompanyModal/>
            </div>
         );
    }
}

export default AddCompanyPage;
