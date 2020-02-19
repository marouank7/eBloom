import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/icons/IconButton';
import IconButton from "@material-ui/core/IconButton";

// import MenuIcon from 'material-ui/icons/MenuIcon';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    background: "transparent"
  },
  flex: {
    flex: 1,
    height: "70px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class HeaderManager extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.root} position="static" elevation={0}>
        <Toolbar>
          <Typography className={classes.flex} type="title" color="inherit">
                <div className="logo-ebloom"></div>
          </Typography>
          <div>
            <IconButton color="contrast" onClick={this.props.login}>
              <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(HeaderManager);
