import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0,
    padding: "20px",
    backgroundColor: "transparent",
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  button: {
    width: "100%",
    height: "50px",
    color: "rgba(255, 255, 0, 0.98)",
    lineHeight: 1.5,
    backgroundColor: '#FF63F7',
    opacity: "0.8",
    borderStyle: "line",
    border: "0px solid rgba(255, 255, 0, 0.98)",
    borderRadius: "4px"
  }
}));

const BottomAppBar = ({match, to, content, component}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar  position="sticky" color="primary" className={classes.appBar}>
          <Button
          component={component} to={to}
          variant="contained" className={classes.button}>{content}</Button>
          <div className={classes.grow} />
      </AppBar>
    </>
  );
}

export default withRouter(BottomAppBar);
