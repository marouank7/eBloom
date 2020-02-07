



// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// // import FilledInput from '@material-ui/core/FilledInput';
// // import OutlinedInput from '@material-ui/core/OutlinedInput';
// // import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// // import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// // import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: 200,
//   },
// }));

// export default function InputAdornments() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });


//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

//   return (
//     <div className={classes.root}>
//       <div>
        
//         <FormControl className={clsx(classes.margin, classes.textField)}>
//           {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
//           <Input
//             // id="standard-adornment-password"
//             // type={values.showPassword ? 'text' : 'password'}
//             // value={values.password}
//             // onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
        
//       </div>
//     </div>
//   );
// }









import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
// import { NavLink} from "react-router-dom";
import '../styles/AdminLoginPage.css';
import AdminLoginHeader from './../Layouts/AdminLoginHeader';
import EbloomButtonNavigator from '../EbloomButtonNavigator';
import { makeStyles, withStyles } from '@material-ui/core';

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
                                    alignContent='flex-start'
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
                                    alignContent='flex-start'
                                    name="Password"
                                    onChange={this.updateField}
                                    classes={{
                                        root: classes.root
                                    }}
                                    className="input login-input ebloom-inputs"
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
