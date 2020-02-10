import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { green, purple } from '@material-ui/core/colors';
// import { PlayCircleFilledWhite } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const NavButton = withStyles({
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




const NavAdmin = ({url,history}) => {
    console.log(history.location.pathname);
  const classes = useStyles();


  return (
    <div>

        <NavButton 
        variant="contained" 
        color="primary" 
        disableRipple 
        onClick={props => history.push(url="/admin/dashboard")}
        className={`${classes.margin} ${history.location.pathname == '/admin/dashboard' ? `active` : ` `}`}
    

        
        >
        Dashboard
        </NavButton>

        <NavButton 
        variant="contained" 
        color="primary" 
        disableRipple 
        className={classes.margin }
        onClick={props => history.push(url="/admin/onboarding-editor")}

        
        >
        Onboarding
        </NavButton>
        
      <NavButton 
      variant="contained" 
      color="primary" 
      disableRipple 
      className={classes.margin}
      onClick={props => history.push(url="/admin/weekly-editor")}

      >
      Week Check
      </NavButton>
    </div>
  );
}

export default withRouter(NavAdmin)


