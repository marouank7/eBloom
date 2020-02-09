import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { green, purple } from '@material-ui/core/colors';
// import { PlayCircleFilledWhite } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const BootstrapButton = withStyles({
  root: {
    // boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    // border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#cb63e8',
    borderColor: '#cb63e8',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // '&:hover': {
    //   backgroundColor: '#0069d9',
    //   borderColor: '#0062cc',
    //   boxShadow: 'none',
    // },
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: '#0062cc',
    //   borderColor: '#005cbf',
    // },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem yellow',
    },


    '& .MuiButton-label': {
        color: 'white'
    },
  },
})(Button);


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));




const NavAdmin = ({props,url,history}) => {

  const classes = useStyles();



  return (
    <div>

        <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        // className={`smaily1 basic_smil ${this.props.answer == 1 ? `active` : ` `}`}
        onClick={props => history.push(url="/admin/dashboard")}
        // className={`${classes.margin} ${this.props.history.pathname == '/admin/dashboard' ? `active` : ` `}`}



        >
        Dashboard
        </BootstrapButton>

        <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin }
        onClick={props => history.push(url="/admin/onboarding-editor")}


        >
        Onboarding
        </BootstrapButton>

      <BootstrapButton
      variant="contained"
      color="primary"
      disableRipple
      className={classes.margin}
      onClick={props => history.push(url="/admin/weekly-editor")}

      >
      Week Check
      </BootstrapButton>
    </div>
  );
}

export default withRouter(NavAdmin)













// import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
// // import './NavAdmin.css';

// class NavAdmin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (
//             <div className="NavAdmin divider">
//                 <div className="admin-nav-buttons">
//                     <NavLink className="button" exact to="/admin/dashboard">Dashboard</NavLink>
//                 </div>

//                 <div className="admin-nav-buttons">
//                     <NavLink className="button"  to="/admin/onboarding-editor">Onboarding</NavLink>
//                 </div>

//                 <div className="admin-nav-buttons">
//                     <NavLink className="button"  to="/admin/weekly-editor">Week Check</NavLink>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NavAdmin;
