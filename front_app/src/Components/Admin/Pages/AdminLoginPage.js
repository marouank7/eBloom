import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { NavLink} from "react-router-dom";
import '../styles/AdminLoginPage.css';
import AdminLoginHeader from './../Layouts/AdminLoginHeader';
import EbloomButtonNavigator from '../EbloomButtonNavigator';

const styledInput = {

    // padding: 30.5 

}

class AdminLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="pages-admin-login">
                <AdminLoginHeader/>

                <div className="component-login">
                    <form noValidate autoComplete="" className="form-admin-login">
                        <Grid container spacing={7}>
                            <Grid item xs={12}>
                                <TextField
                                    style={styledInput}
                                    id="Username"
                                    label="Username"
                                    variant="outlined"
                                    alignContent='flex-start'
                                    name="Username"
                                    onChange={this.updateField}
                                    className="input login-input ebloom-inputs"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={styledInput}
                                    id="Password"
                                    label="Password"
                                    variant="outlined"
                                    alignContent='flex-start'
                                    name="Password"
                                    onChange={this.updateField}
                                    className="input login-input ebloom-inputs"
                                />
                            </Grid>
                        </Grid>
                        <div className="button-admin-login">
                             <EbloomButtonNavigator text="Login" url="/admin/addcompany"/>
                        </div>
                    </form>
                </div>
            
            </div>
        );
    }
}

export default AdminLoginPage;
