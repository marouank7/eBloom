import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ItemsAddCompany({companyName, managerName, logo}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{width : "100px", height:"100px"}} alt={`${companyName} logo`} src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary= {companyName}
          style={{marginLeft : "30px"}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              {managerName}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
