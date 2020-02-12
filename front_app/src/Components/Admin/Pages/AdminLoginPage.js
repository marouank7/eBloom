import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
// import { NavLink} from "react-router-dom";
import '../styles/AdminLoginPage.css';
import AdminLoginHeader from './../Layouts/AdminLoginHeader';
import EbloomButtonNavigator from '../../Core/EbloomButtonNavigator';
import { withStyles } from '@material-ui/core';







import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';


import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const styles = {

    root: {
        '& .MuiOutlinedInput-root': {
            // '& fieldset': {
            //     borderColor: 'red',
            //     borderWidth: 20
            // },
            // '&:hover fieldset': {
            //     borderColor: 'yellow',
            // },
            '&.Mui-focused fieldset': {
                borderColor: '#cb63e8',
                borderWidth: 2
            },
        },

        '& .MuiInputLabel-formControl': {
            color: '#cb63e8'
        },

        '& input': {
            background: "white"
        },

        '& .MuiSvgIcon-root': {
            fontSize: "2rem"
        },
    }
}




class AdminLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { classes } = this.props

        return (
            <div className="pages-admin-login">
                <AdminLoginHeader/>

                <div className="component-login">
                    <form noValidate autoComplete="" className="form-admin-login">
                        <Grid container spacing={7}>
                            <Grid item xs={12}>
                                <TextField
                                    style={styles}
                                    id="Username"
                                    label="Username"
                                    variant="outlined"
                                    aligncontent='flex-start'
                                    name="Username"
                                    onChange={this.updateField}
                                    classes={{
                                        root: classes.root
                                    }}
                                    className="input login-input ebloom-inputs"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Password"
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    aligncontent='flex-start'
                                    name="Password"
                                    onChange={this.updateField}
                                    classes={{
                                        root: classes.root
                                    }}
                                    className="input login-input ebloom-inputs"
                                    InputProps={{
                                        endAdornment: <Visibility position="end">Kg</Visibility >,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <div className="button-admin-login">
                            <EbloomButtonNavigator
                                style={{minWidth: "130px", color: "white", backgroundColor:'#cb63e8', textDecoration: "none"}}
                                text="Login"
                                url="/admin/addcompany"
                            />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(AdminLoginPage);
