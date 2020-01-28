import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CompanyList from '../CompanyList'
import HeaderAdmin from './HeaderAdmin'
import AddCompanyModal from '../ButtonModalAddCompany'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DisplayAdminView({ children, ...rest }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(rest.setOfCompanies, "displayAdminView"); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      //onClick={toggleDrawer(side, false)} // <<<<<<<<<<<<< when open set to false (by clicking on AddCompanyModal which triggers onClick) : it is read by AddCompanyModal as well, and triggers onClose.
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <CompanyList {...rest}/>
      </List>
      <Divider />
      <AddCompanyModal {...rest}/>
    </div>
  );

  // const fullList = side => (
  //   <div
  //     className={classes.fullList}
  //     role="presentation"
  //     onClick={toggleDrawer(side, false)}
  //     onKeyDown={toggleDrawer(side, false)}
  //   >

  //     <Divider />
  //   </div>
  // );

  return (
    <div className="pages-admin-login">
      <HeaderAdmin toggleDrawer={() => toggleDrawer('left', true)}/>
      <Button className="logoEbloomDashboard" onClick={toggleDrawer('left', true)}/>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >

        {sideList('right')}
      </SwipeableDrawer>
      <div className="dashboard">

         {children}
      </div>
    </div>
  );
}
