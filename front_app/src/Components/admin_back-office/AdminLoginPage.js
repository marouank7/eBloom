import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { NavLink} from "react-router-dom";
class AdminLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1>AdminLoginPage</h1>
                <form noValidate autoComplete="" className="form-admin-login">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField 
                                id="Username" 
                                label="Username" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Username"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="Password" 
                                label="Password" 
                                variant="outlined"
                                alignContent='flex-start'
                                name="Password"
                                onChange={this.updateField}
                                className="input"
                            />
                        </Grid>
                    </Grid>
                </form>
                <div className="buttonAdminLogin">
                    <NavLink className="button" activeClassName="active" exact to="/admin/addcompany"> login </NavLink>
                </div>

            </>
        );
    }
}
 
export default AdminLoginPage;