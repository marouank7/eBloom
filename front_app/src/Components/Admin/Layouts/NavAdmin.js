import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const NavButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
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

    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#cb63E8',
      boxShadow: 'none',
    },
    '& .active': {
      boxShadow: 'none',
      backgroundColor: '#cb63E8',
      borderColor: '#005cbf',
    },

    '&:focus': {
      boxShadow: '0 0 0 0.2rem yellow',
    },

    '& .MuiButton-label': {
        color: 'white',
        '&:hover': {
          backgroundColor: '#cb63E8',
          borderColor: '#cb63E8',
          boxShadow: 'none',
        },
        '& .active': {
          boxShadow: 'none',
          background: '#cb63E8 !important',
          borderColor: '#005cbf',
        },
    },
    '& .MuiButton-root': {
        color: 'white',
        '&:hover': {
          backgroundColor: '#cb63E8 !important',
          borderColor: '#cb63E8',
          boxShadow: 'none',
        },
        '& .active': {
          boxShadow: 'none',
          background: '#cb63E8 !important',
          borderColor: '#005cbf',
        },
    },


  },
})(Button);


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#cb63E8',
      boxShadow: 'none',
    },
  },
  active: {
    boxShadow: 'none',
    backgroundColor: '#cb63E8 !important',
    borderColor: '#005cbf',
  },
}));




const NavAdmin = ({props,url,history}) => {

  const classes = useStyles();


  return (
    <div className="divider" style={{display: 'inline-flex'}}>

        <NavButton
        variant="raised"
        disableRipple
        onClick={props => history.push(url="/admin/dashboard")}
        className={`${classes.margin} ${history.location.pathname == '/admin/dashboard' ? `${classes.active}` : ` `}`}

        >
        Dashboard
        </NavButton>

        <NavButton
        variant="contained"
        color="primary"
        disableRipple
        className={`${classes.margin} ${history.location.pathname == '/admin/onboarding-editor' ? `${classes.active}` : ` `}`}
        onClick={props => history.push(url="/admin/onboarding-editor")}


        >
        Onboarding
        </NavButton>

      <NavButton
      variant="contained"
      color="primary"
      disableRipple
      className={`${classes.margin} ${history.location.pathname == '/admin/weekly-editor' ? `${classes.active}` : ` `}`}

      onClick={props => history.push(url="/admin/weekly-editor")}

      >
      Week Check
      </NavButton>
    </div>
  );
}

export default withRouter(NavAdmin)
